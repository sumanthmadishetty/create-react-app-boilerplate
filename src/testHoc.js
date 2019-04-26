import React from "react";

export default function testHoc(WrapperComponent) {
  return class WrappedComponent extends React.Component {
    render() {
      return (
        <>
          <div>"ADDDDDEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"</div>
          <WrapperComponent {...this.props} asdasd="asdadasdsadadasdasdads" />
        </>
      );
    }
  };
}
