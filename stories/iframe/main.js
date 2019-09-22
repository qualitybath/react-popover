import React from "react"
import Frame, { FrameContextConsumer } from "react-frame-component"

import Rows from "../rows/main"

export default function Iframe() {
  return (
    <Frame>
      <FrameContextConsumer>
        {({ window }) => <Rows window={window} />}
      </FrameContextConsumer>
    </Frame>
  )
}
