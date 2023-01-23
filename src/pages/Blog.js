import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/blog.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Blog = () => (
  <Main
    title="Blog"
    description="Stuff on my Mind"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
          <p>Recent thoughts and ideas</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Blog;
