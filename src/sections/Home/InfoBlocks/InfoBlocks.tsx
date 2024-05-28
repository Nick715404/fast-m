import { InfoBlocksList } from "./InfoBlocksList"

type Props = {}

export function InfoBlocks({ }: Props) {
  return (
    <section className="mb-36">
      <div className="container">
        <InfoBlocksList />
      </div>
    </section>
  )
}