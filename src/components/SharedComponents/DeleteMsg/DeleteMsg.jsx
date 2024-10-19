import { Button, ButtonToolbar, Message } from "rsuite";

export default function DeleteMsg({deleteFunction = ()=>{}, cancelFunction = ()=>{}}) {
  return (
    <Message showIcon type="warning" header="Do you want to Delete this?" centered full>
      <p> We are making sure you want to delete this data.</p>
      <hr className="mt-3"/>
      <ButtonToolbar className="mt-3 flex justify-center">
        <Button color="orange" appearance="primary" onClick={deleteFunction}>Delete</Button>
        <Button color="orange" appearance="ghost" onClick={cancelFunction}>Cancel</Button>
      </ButtonToolbar>
    </Message>
  )
}
