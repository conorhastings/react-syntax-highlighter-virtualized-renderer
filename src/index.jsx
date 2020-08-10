import React from 'react';
import { AutoSizer, List } from 'react-virtualized';
import { createElement } from 'react-syntax-highlighter';

function rowRenderer({ rows, stylesheet, useInlineStyles }) {
  return ({ index, key, style }) => createElement({
    node: rows[index],
    stylesheet,
    style,
    useInlineStyles,
    key,
  });
}

export default function virtualizedRenderer({
  overscanRowCount = 10,
  rowHeight = 15,
  scrollToIndex = null,
  scrollToAlignment = 'center',
} = {}) {
  return ({ rows, stylesheet, useInlineStyles }) => (
    <div style={{ height: '100%' }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            rowHeight={rowHeight}
            rowRenderer={rowRenderer({ rows, stylesheet, useInlineStyles })}
            rowCount={rows.length}
            overscanRowCount={overscanRowCount}
            scrollToIndex={scrollToIndex}
            scrollToAlignment={scrollToAlignment}
          />
        )}
      </AutoSizer>
    </div>
  );
}
