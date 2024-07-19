import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ element }) => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = sessionStorage.getItem("account");
    if (session) {
      setAccount(JSON.parse(session));
    }
    setLoading(false); // Kết thúc trạng thái loading sau khi kiểm tra session
  }, []);

  if (loading) {
    // Hiển thị một màn hình loading khi đang kiểm tra session
    return <div>Loading...</div>;
  }

  return account ? element : <Navigate to="/login" />;
};

export default PrivateRoutes;
