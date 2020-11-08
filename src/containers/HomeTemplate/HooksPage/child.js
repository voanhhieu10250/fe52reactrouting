import React, { memo } from "react";

function Child() {
  console.log("Child");
  return (
    <div>
      <h3>Child component</h3>
    </div>
  );
}
export default memo(Child);
//sài memo thì khi mà bên phía component cha có sự thay đổi thì component này không bị render lại
//nhưng nếu bên phía component cha có truyền thêm cái props cho component con này thì component này vẫn bị render lại
