import React from "react";

import Content from "../../components/content/content.component";
import SearchBar from "../../components/search-bar/search-bar.components";

import "./dictionary.styles.css";

const Dictionary = () => (
  <div>
    <div className="page-content">
      <h1 className="page-content-title">Từ điển</h1>
      <p className="page-content-subtitle">
        Chọn bất kỳ từ tiếng Anh để tìm kiếm trong từ điển được lấy Database từ
        WordNet
      </p>
      <Content
        title="How To Use"
        content="Cơ sở dữ liệu được lấy từ WordNet, là một cơ sở dữ liệu từ vựng tiếng Anh. Nó nhóm các từ tiếng Anh thành các tập hợp đồng nghĩa gọi là loạt đồng nghĩa, cung cấp các định nghĩa ngắn gọn và các ví dụ sử dụng, và ghi lại số lượng các quan hệ giữa các loạt đồng nghĩa này hay các thành viên của chúng. Theo cách đó Mạng từ có thể được xem như là một sự kết hợp của từ điển và từ điển đồng nghĩa và phản nghĩa. Khi tra cứu một từ thì sẽ được trả lại các nghĩa và ví dụ câu của từ đó."
        color="purple"
      />
      <Content
        title="Translate"
        content="Nhận một bản dịch nhanh và miễn phí! Chỉ cần chọn ngôn ngữ, sau đó nhập văn bản - tối đa 160 ký tự mỗi lần, cuối cùng bấm vào dịch để nhận kết quả."
        color="green"
      />
    </div>
  </div>
);

export default Dictionary;
