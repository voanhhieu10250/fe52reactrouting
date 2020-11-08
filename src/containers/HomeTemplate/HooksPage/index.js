import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";

export default function HooksPage() {
  const [number, setNumber] = useState(0);

  //viết theo kiểu function này thì khi khai báo hàm, phải thêm từ khóa khai báo (const), bên class thì khỏi
  const handleClick = () => {
    setNumber(number + 1);
  };

  //tham số thứ nhất là 1 cái callback func, tham số thứ 2 là 1 cái mảng rỗng
  useEffect(() => {
    //nếu như tham số thứ 2 là mảng rỗng thì nó tương ứng với componentDidMount bên class
    //*Chỉ chạy 1 lần duy nhất*
    console.log("useEffect = componentDidMount");
  }, []);

  //tham số thứ 2 là 1 cái mảng khác rỗng
  useEffect(() => {
    /**
     * Chạy nhiều lần
     * nếu như tham số thứ 2 của nó là 1 cái mảng khác rỗng thì nó tương ứng với componentDidUpdate bên class
     */
    console.log("useEffect = componentDidUpdate");
  }, [number]);

  //tham số thứ nhất là 1 cái callback func có return
  useEffect(() => {
    /**
     *  tương ứng với componentWillUnmount bên class
     */
    let interval = setInterval(() => {
      console.log("hello");
    }, 2000);
    return () => {
      console.log("useEffect = componentWillUnmount");
      clearInterval(interval);
    };
  }, [number]);

  const showNumber = () => {
    console.log("showNumber");
  };

  //sài cái này khi chỉ muốn đẩy props qua con thôi, ko bị chạy lại nhiều lần
  const showNumberCallBack = useCallback(showNumber, []);

  const numberUp = () => {
    let i = 0;
    while (i < 1000) i++;
    console.log(i);
    return i;
  };

  // Ở đây sài useMemo cho hàm numbenUp ở trên thì khi mà có hoạt động thay đổi và cliet
  //phải render lại thì hàm numberUp này không phải chạy lại (vì đặc điểm của function là mỗi khi có
  //hoạt động thay đổi thì nó sẽ render lại hết từ trên xuống dưới)
  const NumberUpMemo = useMemo(() => numberUp, []);

  return (
    <div>
      <h3>Number: {number}</h3>
      <button className="btn btn-success" onClick={handleClick}>
        Click
      </button>
      <Child showNumber={showNumberCallBack} />
      <h3>Number Up: {NumberUpMemo()}</h3>
    </div>
  );
}
