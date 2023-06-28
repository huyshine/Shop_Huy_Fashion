import HeaderComponent from "../HeaderComponent/HeaderComponent"

const DefaultComponent = ({children} :any) => {
  return (
    <div>
        <HeaderComponent/>
        {children}
    </div>
  )
}

export default DefaultComponent