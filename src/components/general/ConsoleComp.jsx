import React from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

export const ConsoleComp = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome t o the React Terminal UI Demo!</TerminalOutput>
  ]);
  return (
    <div className="container">
      <Terminal name='React Terminal Usage Example' colorMode={ColorMode.Light} onInput={terminalInput => console.log(`New terminal input received: '${terminalInput}'`)}>
        {terminalLineData}
      </Terminal>
    </div>
  )
};