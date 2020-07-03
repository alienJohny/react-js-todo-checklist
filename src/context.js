import React from "react"

const ContextRemoveTodoItem = React.createContext({ removeTodo: function(obj) {console.log(obj)} })

export default ContextRemoveTodoItem
