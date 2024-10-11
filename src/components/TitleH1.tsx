

interface TitleH1Props {
  text: string;
}

export default function TitleH1({ text } : TitleH1Props) {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
