import { SandpackCodeEditor, SandpackConsole, SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export function App() {
  return (
    <SandpackProvider
      theme='auto'
      template='vite-react-ts'
      className='h-100vh w-full rounded-none'
    >
      <PanelGroup direction='horizontal' className='h-100vh'>
        <Panel defaultSize={15} minSize={10} maxSize={20}>
          <SandpackFileExplorer className='h-full' />
        </Panel>
        <PanelResizeHandle />
        <Panel>
          <SandpackCodeEditor className='h-full [&>.sp-tabs]:h-40px' showLineNumbers showInlineErrors showTabs closableTabs />
        </Panel>
        <PanelResizeHandle />
        <Panel>
          <PanelGroup direction='vertical'>
            <Panel>
              <SandpackPreview className='h-full' showNavigator showOpenInCodeSandbox={false} />
            </Panel>
            <PanelResizeHandle />
            <Panel>
              <SandpackConsole />
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </SandpackProvider>
  );
}
