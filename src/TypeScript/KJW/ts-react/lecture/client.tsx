// export default가 아닐 때 * 사용
import * as React from "react"
import * as ReactDOM from "react-dom/client"

import GuGuDan from "./GuGuDan"
import WordRelay from "./WordRelay"

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Failed to find the root element")
const root = ReactDOM.createRoot(rootElement)

root.render(<WordRelay />)
