import React from 'react';

interface IHighlighterProps {
  highlight: string;
  children: any;
}

const Highlighter: React.FC<IHighlighterProps> = ({ children, highlight }) => {
  if (!highlight) return children;
  const regexp = new RegExp(
    highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    'g',
  );
  const matches = children.match(regexp);
  //   console.log(matches);
  const parts = children.split(regexp);
  for (let i = 0; i < parts.length; i++) {
    if (i !== parts.length - 1) {
      let match = matches[i];
      while (parts[i + 1] === '' && matches[i + 1]) {
        match += matches[i + 1];
        // console.log(parts);
        i += 1;
      }

      parts[i] = (
        <React.Fragment key={i}>
          {parts[i]}
          <span className="text-red-500">{match}</span>
        </React.Fragment>
      );
      //   console.log(parts);
    }
  }
  return <div className="highlighter">{parts}</div>;
};
export default Highlighter;
