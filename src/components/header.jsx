import { Container } from "@mui/system";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./header.scss";
function header() {
  return (
    <div className="header">
      <Container maxWidth="lg">
        <div className="nav">
          <div className="inner">
            <input type="text" placeholder="Поиск" />
            <span>
              <SearchOutlined />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default header;
