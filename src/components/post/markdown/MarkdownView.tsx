import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownView() {

    return (
        <>
            <Markdown remarkPlugins={[remarkGfm]}>
                안녕하세요
            </Markdown>
        </>
    )
}