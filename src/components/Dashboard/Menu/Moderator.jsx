import { VscPreview } from "react-icons/vsc";
import MenuItem from "./MenuItem";
import { TbMessageReportFilled } from "react-icons/tb";

const Moderator = () => {
  return (
    <section>
      <MenuItem
        text={"Product Review"}
        address={"product-review"}
        icon={VscPreview}
      />
      <MenuItem
        text={"Reported Contents"}
        address={"report-contents"}
        icon={TbMessageReportFilled}
      />
    </section>
  );
};

export default Moderator;
