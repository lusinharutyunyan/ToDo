import { formatCountdown } from 'antd/lib/statistic/utils'
import React, { useState } from 'react';
import "./Todoform.css"
import { Input } from 'antd';
import { Button } from 'antd';



function Todoform(props) {
  const [input, setInput] = useState("")

  

  return (
    <form className="todoform"  onSubmit ={this.addItem}>
      <Input placeholder="Add a todo" value={input} className="todoinput" name="text" />
      <Button type="primary">Add </Button>

    </form>
  )
}

export default Todoform



