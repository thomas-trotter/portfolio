"use client";

import { useState } from "react";
import classNames from "classnames";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import BlogPostListItem from "@/components/cards/blog-post-list-item";
import Section from "@/components/ui/section";
import { blogPosts, POSTS_PER_PAGE } from "@/lib/content";

export default function BlogListSection() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredPosts = !normalizedQuery ? blogPosts : blogPosts.filter((post) => 
          post.title.toLowerCase().includes(normalizedQuery) ||
          post.excerpt.toLowerCase().includes(normalizedQuery),
      );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

  const currentPage = Math.min(page, totalPages);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  function handleSearchChange(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <Section>
      <div className="mb-7.5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="title-display">
          Blog
        </h1>
        <input
          type="search"
          value={query}
          onChange={(event) => handleSearchChange(event.target.value)}
          placeholder="Search posts…"
          className="input w-full sm:w-[220px]"
          aria-label="Search posts"
        />
      </div>

      <div className="flex flex-col">
        {paginatedPosts.length === 0 && (
          <p className="text-sm text-muted">No posts found.</p>
        )}
        {paginatedPosts.map((post, index) => (
          <div
            key={post.slug}
            className={classNames(
              "border-b border-border pb-5.5",
              index < paginatedPosts.length - 1 ? "mb-5.5" : "border-b-0 pb-0",
            )}
          >
            <BlogPostListItem post={post} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="mt-7.5 flex items-center justify-center gap-3 font-mono text-xs text-muted"
        >
          <button
            type="button"
            className="transition-colors hover:text-ink disabled:opacity-40"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <HiChevronLeft className="size-4" aria-hidden />
          </button>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              className={classNames(
                "transition-colors hover:text-ink",
                pageNumber === currentPage && "text-ink",
              )}
              onClick={() => setPage(pageNumber)}
              aria-current={pageNumber === currentPage ? "page" : undefined}
            >
              {pageNumber}
            </button>
          ))}
          <button
            type="button"
            className="transition-colors hover:text-ink disabled:opacity-40"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <HiChevronRight className="size-4" aria-hidden />
          </button>
        </nav>
      )}
    </Section>
  );
}
