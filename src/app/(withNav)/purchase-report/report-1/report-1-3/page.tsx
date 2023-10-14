"use client";

import React from "react";
import { useState } from "react";
import "@components/Report-temp/report-temp.scss";
import ReportTable from '../mainTable'
import SearchZone from "../searchZone";

export default function Page() {
    const data = [
        {
            info:[
                {
                    number: '1', 
                    activityName: '', 
                    purchasement: 'โครงการจ้างที่ปรึกษาจัดทำเเผนเเม่บทการเสริมสร้างนวัตกรรมทางการท่องเที่ยว การท่องเที่ยวเเห่งประเทศไทย พ.ศ. 2566-2570',
                    department:[
                        {
                            fullName: 'งานนวัตกรรมองค์กร',
                            shortName: 'กบย.'
                        }
                    ],
                    budget:'2,500,000.00',
                    actionPlan: [
                        {
                            step1: {
                                    SEDate: '(01/09/2564 - 30/09/2564)',
                                    october: 'bg-info',
                                    november: '',
                                    december: '',
                                    january: '',
                                    february: '',
                                    march: '',
                                    april: '',
                                    may: '',
                                    june: '',
                                    july: '',
                                    august: '',
                                    september: ''
                            },
                            step2: {
                                SEDate: '(15/09/2564 - 30/09/2564)',
                                october: '',
                                november: 'bg-info',
                                december: 'bg-info',
                                january: '',
                                february: '',
                                march: '',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: ''
                            },
                            step3: {
                                SEDate: '(01/10/2564 - 31/12/2564)',
                                october: '',
                                november: '',
                                december: '',
                                january: 'bg-info',
                                february: '',
                                march: '',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: ''
                            },
                            step4: {
                                SEDate: '(01/01/2565 - 31/01/2565)',
                                october: '',
                                november: '',
                                december: '',
                                january: '',
                                february: 'bg-info',
                                march: 'bg-info',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: ''
                            },
                            step5: {
                                SEDate: '(01/02/2565 - 31/08/2565)',
                                october: '',
                                november: '',
                                december: '',
                                january: '',
                                february: 'bg-info',
                                march: 'bg-info',
                                april: 'bg-info',
                                may: 'bg-info',
                                june: 'bg-info',
                                july: 'bg-info',
                                august: 'bg-info',
                                september: ''
                            },
                            step6: {
                                SEDate: '(30/09/2566 - 30/09/2566)',
                                october: '',
                                november: '',
                                december: '',
                                january: '',
                                february: '',
                                march: '',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: 'bg-info'
                            },
                        }
                    ]
                },
                {
                    number: '2', 
                    activityName: '', 
                    purchasement: 'โครงการประกวดนวัตกรรม ททท. (TAT Amazing Idea Awards 2022)',
                    department:[
                        {
                            fullName: 'งานนวัตกรรมองค์กร',
                            shortName: 'กบย.'
                        }
                    ],
                    budget:'2,000,000.00',
                    actionPlan: [
                        {
                            step1: {
                                    SEDate: '(01/09/2564 - 30/09/2564)',
                                    october: 'bg-info',
                                    november: '',
                                    december: '',
                                    january: '',
                                    february: '',
                                    march: '',
                                    april: '',
                                    may: '',
                                    june: '',
                                    july: '',
                                    august: '',
                                    september: ''
                            },
                            step2: {
                                SEDate: '(15/09/2564 - 30/09/2564)',
                                october: '',
                                november: 'bg-info',
                                december: 'bg-info',
                                january: '',
                                february: '',
                                march: '',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: ''
                            },
                            step3: {
                                SEDate: '(01/10/2564 - 31/12/2564)',
                                october: '',
                                november: '',
                                december: '',
                                january: 'bg-info',
                                february: '',
                                march: '',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: ''
                            },
                            step4: {
                                SEDate: '(01/01/2565 - 31/01/2565)',
                                october: '',
                                november: '',
                                december: '',
                                january: '',
                                february: 'bg-info',
                                march: 'bg-info',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: ''
                            },
                            step5: {
                                SEDate: '(01/02/2565 - 31/08/2565)',
                                october: '',
                                november: '',
                                december: '',
                                january: '',
                                february: 'bg-info',
                                march: 'bg-info',
                                april: 'bg-info',
                                may: 'bg-info',
                                june: 'bg-info',
                                july: 'bg-info',
                                august: 'bg-info',
                                september: ''
                            },
                            step6: {
                                SEDate: '(30/09/2566 - 30/09/2566)',
                                october: '',
                                november: '',
                                december: '',
                                january: '',
                                february: '',
                                march: '',
                                april: '',
                                may: '',
                                june: '',
                                july: '',
                                august: '',
                                september: 'bg-info'
                            },
                        }
                    ]
                }
            ],
            total : [
                {
                    text: 'รวมเป็นเงิน',
                    value: '4,500,000.00'
                }
        ]
        }
    ];
    
    return (
        <>
            <div className='d-flex flex-column' style={{width: '100%'}}>
                <div className="breadcrumb-zone">รายงานจัดซื้อจัดจ้าง {'>'} <span className="bread-crumb-page-name">รายงานแผนปฏิบัติการจัดซื้อจัดจ้าง ประจำปีงบประมาณ 25XX </span> {'>'} <span className="bread-crumb-page-name"><b>งบอุดหนุน</b></span></div>
                    <SearchZone/>
                    <div className='search-wrapper-section d-flex flex-column'>
                        <div className="years d-flex flex-column p-2 justify-content-center">
                            <div className="box">
                                <b>รายงานแผนปฏิบัติการจัดซื้อจัดจ้าง (งบอุดหนุน) ประจำปีงบประมาณ 2565</b>
                            </div>
                            <div className="box d-flex">
                                <div className="content mr-10"><b>หน่วยงาน:</b></div>
                                <div className="content"><p>สำนักผู้ว่าการ</p></div>
                            </div>
                        </div>
                        <ReportTable data = {data}/>
                    </div>
                </div>
        </>
    )
}