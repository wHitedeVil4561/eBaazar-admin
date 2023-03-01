import { Link, Outlet } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {useTranslation} from "react-i18next"
const ProductLayout = () => {
  const {t }  = useTranslation();
    return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex bg-white shadow-md p-3 rounded-md justify-between items-center w-full ">
        <span className="font-comic font-bold text-2xl text-dark-blue">
          {t('PRODUCTS')}
        </span>
        
        <div className="flex gap-5">
          <input
            className="rounded-full min-w-[240] px-5 outline-none border border-input-border"
            placeholder={t('SEARCH_PRODUCTS')}
          />
          <Link to={"add-product"}>
          <button className="flex items-center gap-3 bg-light-orange py-2 px-5 rounded-lg text-white font-roboto font-medium">
            <AddCircleOutlineIcon />
            {t("ADD_PRODUCT")}
          </button>
          </Link>
        
          <button className="flex items-center gap-3 bg-pink py-2 px-5 rounded-lg text-white font-roboto font-medium">
            <CloudUploadIcon />
            {t('BULK_UPLOAD')}
          </button>
          <button className="flex items-center p-2 bg-blue text-white rounded-full">
            <CloudDownloadIcon />
          </button>
        </div>
      </div>
      <Outlet className="max-w-full" />
    </div>
  );
};

export default ProductLayout;
