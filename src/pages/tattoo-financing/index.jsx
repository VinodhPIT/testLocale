import React from 'react'
import useTranslation from "next-translate/useTranslation";


export default function Klarna() {
    const { t } = useTranslation();
  return (
    
    <div>
      

      <section className="container_full">
        <div className="row g-0">
          <div className="col-md-12">
            <div className=" w_100pc text_center position_relative d_flex justify_content_center align_item_center block_bg_pink_50 m_mt_10 pl_20 pr_20">
              <div className="pt_60 pb_60 m_pt_30 m_pb_30">
                <div className="">
                  <h2 className="color_gray_550 custom_fs_60 custom_fs_m_28 fw_800 mb_40 m_mb_25">
                    {t("common:klarnaPage.findArtists")}
                  </h2>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 m_lh_38 fw_900 mb_30 m_mb_20 d_max_420 m_max_100">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">
                      {t("common:forArtistPage.management")}
                    </span>
                    {t("common:forArtistPage.title1")}
                  </span>
                </h2>

                <h4 className="color_gray_550 custom_fs_22 lh_27 custom_fs_m_16 m_lh_20 fw_600 d_flex align_item_center mb_0">
                        {t("common:forArtistPage.set-up-and-manage")}
                      </h4>


   
    </div>
  )
}
