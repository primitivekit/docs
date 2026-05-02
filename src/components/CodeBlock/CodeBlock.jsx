import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';
import './CodeBlock.css';

const CodeBlock = ({ code, language = 'jsx', showLineNumbers = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span className="code-block__language">{language}</span>
        <button
          onClick={handleCopy}
          className={`code-block__copy-btn ${copied ? 'code-block__copy-btn--copied' : ''}`}
          aria-label={copied ? 'Copied!' : 'Copy code to clipboard'}
        >
          {copied ? (
            <>
              <Check size={14} />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: '14px',
          padding: '16px',
          background: '#0a0a0a'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;