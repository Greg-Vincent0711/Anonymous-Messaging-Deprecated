import React from "react";
import { useState } from "react";
import Popup from "./components/Popup";

/**
 * all rendered components 'rendered' as part of their name
 */
function App() {
  const [visiblePopup, setVisiblePopup] = useState(true);

  return (
    <div>
      {/**the trigger value determines if popup is rendered, but this value is set elsewhere */}
      <Popup className="rendered-popup" trigger={visiblePopup}>
        {/**Because the h1 is a child of the popup component, all css for it is handled in Popup.jsx */}
        <h1>Join or Chat</h1>
      </Popup>
      <h1>Placeholder text</h1>
    </div>
  );
}

export default App;
