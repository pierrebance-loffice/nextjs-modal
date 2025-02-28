type Props = Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>

export default function Layout(props: Props) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  )
}
