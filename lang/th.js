/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR =
{
   "CT_MASK1":"แฟ้มส่งต่อ||*.torrent||แฟ้มทั้งหมด (*.*)||*.*||",
   "DLG_BTN_OK":"ตกลง",
   "DLG_BTN_CANCEL":"ยกเลิก",
   "DLG_BTN_APPLY":"พร้อมใช้งาน",
   "DLG_BTN_YES":"ใช่",
   "DLG_BTN_NO":"ไม่ใช่",
   "DLG_BTN_CLOSE":"ปิด",
   "DLG_SETTINGS_00":"การตั้งค่า",
   "DLG_SETTINGS_1_GENERAL_01":"ภาษา",
   "DLG_SETTINGS_1_GENERAL_02":"ภาษา:",
   "DLG_SETTINGS_1_GENERAL_10":"ความเป็นส่วนตัว",
   "DLG_SETTINGS_1_GENERAL_11":"ตรวจสอบการปรับปรุงโดยอัตโนมัติ",
   "DLG_SETTINGS_1_GENERAL_12":"ปรับปรุงไปยังรุ่นทดลอง",
   "DLG_SETTINGS_1_GENERAL_13":"ส่งข้อมูลที่ปกปิดชื่อเมื่อกำลังตรวจสอบการปรับปรุง",
   "DLG_SETTINGS_1_GENERAL_17":"เมื่อกำลังดาวน์โหลด",
   "DLG_SETTINGS_1_GENERAL_18":"เพิ่ม .!ut ไปยังแฟ้มที่ยังไม่เสร็จสมบูรณ์",
   "DLG_SETTINGS_1_GENERAL_19":"จัดสรรพื้นที่ล้วงหน้าสำหรับแฟ้มทั้งหมด",
   "DLG_SETTINGS_1_GENERAL_20":"ป้องกันการสแตนด์บายหากมีทอร์เรนต์กำลังทำงานอยู่",
   "DLG_SETTINGS_2_UI_01":"ตัวเลือกการแสดงผล",
   "DLG_SETTINGS_2_UI_02":"ยืนยันเมื่อลบ torrent",
   "DLG_SETTINGS_2_UI_03":"ยืนยันเมื่อลบผู้ส่งต่อ",
   "DLG_SETTINGS_2_UI_04":"ยืนยันเมื่อออกจากโปรแกรม",
   "DLG_SETTINGS_2_UI_05":"สลับสีพื้นหลังรายชื่องาน",
   "DLG_SETTINGS_2_UI_06":"แสดงความเร็วปัจจุบันในไตเติ้ลบาร์",
   "DLG_SETTINGS_2_UI_07":"แสดงขีดจำกัดความเร็วบนแถบสถานะ",
   "DLG_SETTINGS_2_UI_15":"เพิ่มแฟ้มส่งต่อ",
   "DLG_SETTINGS_2_UI_16":"ไม่เริ่มรับแฟ้มโดยอัตโนมัติ",
   "DLG_SETTINGS_2_UI_17":"กระตุ้นหน้าต่างโปรแกรม",
   "DLG_SETTINGS_2_UI_18":"แสดงหน้าต่างรายละเอียดในแฟ้มส่งต่อ",
   "DLG_SETTINGS_2_UI_19":"การกระทำสหรับการคลิกสองครั้ง",
   "DLG_SETTINGS_2_UI_20":"สำหรับการส่งต่อแฟ้มส่งต่อ:",
   "DLG_SETTINGS_2_UI_22":"สำหรับการดาวน์โหลดแฟ้มส่งต่อ:",
   "DLG_SETTINGS_3_PATHS_01":"ตำแหน่งของแฟ้มที่ได้รับ",
   "DLG_SETTINGS_3_PATHS_02":"ใส่แฟ้มที่ได้รับใหม่ใน[ค่าพื้นฐาน]:",
   "DLG_SETTINGS_3_PATHS_03":"แสดงไดอะลอคทุกครั้งเมื่อเพิ่มแฟ้มแบบธรรมดา",
   "DLG_SETTINGS_3_PATHS_06":"ย้ายแฟ้มที่รับแล้วเสร็จไปยัง:",
   "DLG_SETTINGS_3_PATHS_07":"ติดป้ายของแฟ้มส่งต่อ",
   "DLG_SETTINGS_3_PATHS_10":"ย้ายเฉพาะแฟ้มในไดเรคทอรี่รับแฟ้มพื้นฐาน",
   "DLG_SETTINGS_3_PATHS_11":"ตำแหน่งของ .torrents",
   "DLG_SETTINGS_3_PATHS_12":"เก็บแฟ้ม .torrent ใน:",
   "DLG_SETTINGS_3_PATHS_15":"ย้ายแฟ้ม .torrent สำหรับงานที่แล้วเสร็จไป:",
   "DLG_SETTINGS_3_PATHS_18":"โหลด .torrents จากโดยอัตโนมัติ:",
   "DLG_SETTINGS_3_PATHS_19":"ลบ .torrents ที่โหลด",
   "DLG_SETTINGS_4_CONN_01":"การรอพอร์ต",
   "DLG_SETTINGS_4_CONN_02":"พอร์ตที่ใช้งานในการเชื่อมต่อขาเข้า:",
   "DLG_SETTINGS_4_CONN_04":"สุ่มพอร์ต",
   "DLG_SETTINGS_4_CONN_05":"สุ่มพอร์ตทุกครั้งเมื่อเปิดใช้",
   "DLG_SETTINGS_4_CONN_06":"ใช้การส่งต่อพอร์ตด้วย UPnP",
   "DLG_SETTINGS_4_CONN_07":"ใช้การส่งต่อพอร์ตด้วย NAT-PMP",
   "DLG_SETTINGS_4_CONN_08":"Proxy Server",
   "DLG_SETTINGS_4_CONN_09":"ชนิด:",
   "DLG_SETTINGS_4_CONN_11":"พร๊อกซี่:",
   "DLG_SETTINGS_4_CONN_13":"พอร์ต:",
   "DLG_SETTINGS_4_CONN_15":"แสดงตัวผู้ใช้",
   "DLG_SETTINGS_4_CONN_16":"ชื่อผู้ใช้:",
   "DLG_SETTINGS_4_CONN_18":"รหัสผ่าน:",
   "DLG_SETTINGS_4_CONN_19":"แก้ไขปัญหาชื่อโฮสต์ผ่่านทางพร็อกซี",
   "DLG_SETTINGS_4_CONN_20":"ใช้ proxy server สำหรับการเชื่อมต่อแบบ peer-to-peer",
   "DLG_SETTINGS_4_CONN_21":"เพิ่มข้อยกเว้นไฟร์วอลล์ Windows",
   "DLG_SETTINGS_4_CONN_22":"ความเป็นส่วนตัวเชิงพร็อกซี",
   "DLG_SETTINGS_4_CONN_23":"ปิดการใช้การมองหา DNS ท้องถิ่นทั้งหมด",
   "DLG_SETTINGS_4_CONN_24":"ปิดการใช้คุณลักษณะที่อาจเปิดเผยข้อมูลประจำตัว",
   "DLG_SETTINGS_4_CONN_25":"ปิดการเชื่อมต่อที่พร็อกซีไม่สนับสนุน",
   "DLG_SETTINGS_5_BANDWIDTH_01":"การจำกัดอัตราการอัปโหลดทั่วโลก",
   "DLG_SETTINGS_5_BANDWIDTH_02":"ส่งข้อมูลโดยรวมสูงสุด (kB/s): [0: ไม่กำหนด]",
   "DLG_SETTINGS_5_BANDWIDTH_03":"อัตโนมัติ",
   "DLG_SETTINGS_5_BANDWIDTH_05":"?ใช้อัตราส่งข้อมูลนี้เมื่อไม่มีการรับข้อมูล (kB/s):",
   "DLG_SETTINGS_5_BANDWIDTH_07":"การจำกัดอัตราการดาวน์โหลดทั่วโลก",
   "DLG_SETTINGS_5_BANDWIDTH_08":"รับข้อมูลโดยรวมสูงสุด (kB/s): [0: ไม่กำหนด]",
   "DLG_SETTINGS_5_BANDWIDTH_10":"จำนวนการเชื่อมต่อสูงสุด",
   "DLG_SETTINGS_5_BANDWIDTH_11":"จำนวนการเชื่อมต่อสูงสุด (ทั้งหมด):",
   "DLG_SETTINGS_5_BANDWIDTH_14":"จำนวนการเชื่อมต่อสูงสุด (ต่อ torrent):",
   "DLG_SETTINGS_5_BANDWIDTH_15":"จำนวนช่องของการส่งข้อมูลต่อ torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_17":"ใช้ช่องการส่งข้อมูลเพิ่มเมื่อความเร็วส่งข้อมูล < 90%",
   "DLG_SETTINGS_5_BANDWIDTH_18":"Global Rate Limit Options",
   "DLG_SETTINGS_5_BANDWIDTH_19":"นำการจำกัดอัตราไปใช้กับส่วนเสียเปล่าในการขนส่ง",
   "DLG_SETTINGS_5_BANDWIDTH_20":"นำการจำกัดอัตราไปใช้กับการเชื่อมต่อ uTP",
   "DLG_SETTINGS_6_BITTORRENT_01":"คุณลักษณะ BitTorrent พื้นฐาน",
   "DLG_SETTINGS_6_BITTORRENT_02":"ใช้งานเครือข่าย DHT",
   "DLG_SETTINGS_6_BITTORRENT_03":"ขอข้อมูล scrape จากผู้ส่งต่อ",
   "DLG_SETTINGS_6_BITTORRENT_04":"ใช้งาน DHT สำหรับแฟ้มส่งต่อใหม่",
   "DLG_SETTINGS_6_BITTORRENT_05":"แลกเปลี่ยนเพียร์กันเอง (Peer Exchange)",
   "DLG_SETTINGS_6_BITTORRENT_06":"ใช้การหาเพียร์ใกล้เคียง (Local)",
   "DLG_SETTINGS_6_BITTORRENT_07":"จำกัดแบนด์วิธเพียร์ใกล้เคียง",
   "DLG_SETTINGS_6_BITTORRENT_08":"IP/ชื่อเครื่อง ที่บอกผู้ส่งต่อ:",
   "DLG_SETTINGS_6_BITTORRENT_10":"เข้ารหัสโปรโตคอล",
   "DLG_SETTINGS_6_BITTORRENT_11":"ขาออก:",
   "DLG_SETTINGS_6_BITTORRENT_13":"ยอมให้มีขาเข้าแบบไม่เข้ารหัส",
   "DLG_SETTINGS_6_BITTORRENT_14":"เปิดใช้การจัดการความถี่ [uTP]",
   "DLG_SETTINGS_6_BITTORRENT_15":"เปิดการสนับสนุนผู้ส่งต่อ UDP",
   "DLG_SETTINGS_7_TRANSFERCAP_01":"เปิดการใช้การถ่ายโอนตรวจจับ",
   "DLG_SETTINGS_7_TRANSFERCAP_02":"การตั้งค่าการตรวจจับ",
   "DLG_SETTINGS_7_TRANSFERCAP_03":"ชนิดการจำกัด:",
   "DLG_SETTINGS_7_TRANSFERCAP_04":"ความจุความถี่:",
   "DLG_SETTINGS_7_TRANSFERCAP_05":"ระยะเวลา (วัน):",
   "DLG_SETTINGS_7_TRANSFERCAP_06":"ประวัติการใช้งานสำหรับคาบที่เลือก:",
   "DLG_SETTINGS_7_TRANSFERCAP_07":"อัปโหลดแล้ว:",
   "DLG_SETTINGS_7_TRANSFERCAP_08":"ดาวน์โหลดแล้ว:",
   "DLG_SETTINGS_7_TRANSFERCAP_09":"อัปโหลดแล้ว + ดาวน์โหลดแล้ว:",
   "DLG_SETTINGS_7_TRANSFERCAP_10":"คาบเวลา:",
   "DLG_SETTINGS_7_TRANSFERCAP_11":"%d วันล่าสุด",
   "DLG_SETTINGS_7_TRANSFERCAP_12":"ประวัติล่าสุด",
   "DLG_SETTINGS_8_QUEUEING_01":"ตั้งค่าการจัดลำดับ",
   "DLG_SETTINGS_8_QUEUEING_02":"จำนวนแฟ้มส่งต่อใช้งานพร้อมกันสูงสุด (ทั้งส่งและรับข้อมูล):",
   "DLG_SETTINGS_8_QUEUEING_04":"จำนวนแฟ้มส่งต่อรับข้อมูลพร้อมกันสูงสุด :",
   "DLG_SETTINGS_8_QUEUEING_06":"ส่งต่อขณะที่ [ค่าพื้นฐาน]",
   "DLG_SETTINGS_8_QUEUEING_07":"อัตราส่วนต่ำสุด (%):",
   "DLG_SETTINGS_8_QUEUEING_09":"เวลาส่งต่อต่ำสุด (นาที):",
   "DLG_SETTINGS_8_QUEUEING_11":"งานที่ส่งต่อมีความสำคัญมากกว่างานรับข้อมูล",
   "DLG_SETTINGS_8_QUEUEING_12":"เมื่อ µTorrent ถึงเป้าหมายความเร็ว",
   "DLG_SETTINGS_8_QUEUEING_13":"จำกัดความเร็วส่งข้อมูล: [0: หยุด]",
   "DLG_SETTINGS_9_SCHEDULER_01":"ใช้ตารางเวลา",
   "DLG_SETTINGS_9_SCHEDULER_02":"ตารางเวลา",
   "DLG_SETTINGS_9_SCHEDULER_04":"การตั้งค่าตารางเวลา",
   "DLG_SETTINGS_9_SCHEDULER_05":"กำหนดอัตราส่งข้อมูลไว้ที่ (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_07":"กำหนดอัตรารับข้อมูลไว้ที่ (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_09":"ระงับ DHT เมื่อปิด",
   "DLG_SETTINGS_9_WEBUI_01":"ใช้งาน Web UI",
   "DLG_SETTINGS_9_WEBUI_02":"ตรวจสอบสิทธิ์",
   "DLG_SETTINGS_9_WEBUI_03":"ชื่อผู้ใช้:",
   "DLG_SETTINGS_9_WEBUI_05":"รหัสผ่าน:",
   "DLG_SETTINGS_9_WEBUI_07":"ให้มีผู้เยี่ยมชมได้โดยใช้ชื่อ:",
   "DLG_SETTINGS_9_WEBUI_09":"การเชื่อมต่อ",
   "DLG_SETTINGS_9_WEBUI_10":"เลือกพอร์ตที่ใช้งาน (ค่าพื้นฐานคือพอร์ต bittorrent):",
   "DLG_SETTINGS_9_WEBUI_12":"ให้ใช้เฉพาะจาก IP ดังต่อไปนี้ (คั่นค่าต่างๆด้วย,):",
   "DLG_SETTINGS_A_ADVANCED_01":"ปรับแต่งระดับสูง [ระวัง:อย่าแก้ไข!]",
   "DLG_SETTINGS_A_ADVANCED_02":"ค่า:",
   "DLG_SETTINGS_A_ADVANCED_03":"จริง",
   "DLG_SETTINGS_A_ADVANCED_04":"เท็จ",
   "DLG_SETTINGS_A_ADVANCED_05":"ตั้งค่า",
   "DLG_SETTINGS_B_ADV_UI_01":"ป๊อบอัพรายการความเร็ว[คั่นค่าต่างๆด้วยเครื่องหมายจุลภาค]",
   "DLG_SETTINGS_B_ADV_UI_02":"ใช้ป๊อบอัพรายการความเร็วต่อไปนี้",
   "DLG_SETTINGS_B_ADV_UI_03":"รายการความเร็วส่งข้อมูล:",
   "DLG_SETTINGS_B_ADV_UI_05":"รายการความเร็วรับข้อมูล:",
   "DLG_SETTINGS_B_ADV_UI_07":"ป้ายตลอดกาล [แยกโดยใช้อักขระ |]",
   "DLG_SETTINGS_B_ADV_UI_08":"เครื่องมือค้นหา [รูปแบบ: ชื่อ|URL]",
   "DLG_SETTINGS_C_ADV_CACHE_01":"การตั้งค่าแคชพื้นฐาน",
   "DLG_SETTINGS_C_ADV_CACHE_02":"แคชดิสก์ถูกนำไปใช้สำหรับข้อมูลที่เข้าถึงบ่อยครั้งเพื่อลดจำนวนการอ่านและเขียนไปยังฮาร์ดไดรฟ์ µTorrent จัดการแคชได้เองโดยอัตโนมัติในกรณีปกติ แต่คุณสามารถเปลี่ยนความประพฤติโดยการแก้ไขการตั้งค่าต่อไปนี้ได้",
   "DLG_SETTINGS_C_ADV_CACHE_03":"กำหนดขนาดแคชอัตโนมัติและรุบขนาดแคชเอง(MB):",
   "DLG_SETTINGS_C_ADV_CACHE_05":"ลดการใช้หน่วยความจำเมื่อแคชไม่จำเป็น",
   "DLG_SETTINGS_C_ADV_CACHE_06":"ปรับแต่งแคชขั้นสูง",
   "DLG_SETTINGS_C_ADV_CACHE_07":"ใช้งานดิสก์แคชตอนเขียน",
   "DLG_SETTINGS_C_ADV_CACHE_08":"เขียน block ที่ไม่ถูกแตะต้อง ทุก 2 นาที",
   "DLG_SETTINGS_C_ADV_CACHE_09":"เขียนชิ้นส่วนที่ครบในทันที",
   "DLG_SETTINGS_C_ADV_CACHE_10":"ใช้งานดิสก์แคชตอนอ่าน",
   "DLG_SETTINGS_C_ADV_CACHE_11":"ปิดแคชอ่านถ้าความเร็วการส่งข้อมูลต่ำ",
   "DLG_SETTINGS_C_ADV_CACHE_12":"ลบ block เก่าออกจากแคช",
   "DLG_SETTINGS_C_ADV_CACHE_13":"เพิ่มขนาดแคชอัตโนมัตเมื่อแคชถูกใช้งานหนัก",
   "DLG_SETTINGS_C_ADV_CACHE_14":"ปิดการใช้งานการแคช Windows ของการเขียนดิสก์",
   "DLG_SETTINGS_C_ADV_CACHE_15":"ปิดการใช้งานการแคช Windows ของการอานดิสก์",
   "DLG_SETTINGS_C_ADV_RUN_01":"เรียกใช้โปรแกรม",
   "DLG_SETTINGS_C_ADV_RUN_02":"เรียกใช้โปรแกรมนี้เมื่อแฟ้มส่งต่อเสร็จสิ้น:",
   "DLG_SETTINGS_C_ADV_RUN_04":"เรียกใช้โปรแกรมนี้เมื่อแฟ้มส่งต่อเปลี่ยนสถานะ:",
   "DLG_SETTINGS_C_ADV_RUN_06":"You can use these commands:\r\n%F - Name of downloaded file (for single file torrents)\r\n%D - Directory where files are saved\r\n%N - Title of torrent\r\n%S - State of torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nState is a combination of:\r\nstarted = 1, checking = 2, start-after-check = 4,\r\nchecked = 8, error = 16, paused = 32, auto = 64, loaded = 128",
   "DLG_TORRENTPROP_00":"คุณสมบัติ torrent",
   "DLG_TORRENTPROP_1_GEN_01":"ผู้ส่งต่อ (คั่นด้วยบรรทัดว่าง 1 บรรทัด)",
   "DLG_TORRENTPROP_1_GEN_03":"ปรับแต่งแบนด์วิธ",
   "DLG_TORRENTPROP_1_GEN_04":"ส่งข้อมูลสูงสุด (kB/s): [0: ใช้ค่าพื้นฐาน]",
   "DLG_TORRENTPROP_1_GEN_06":"รับข้อมูลสูงสุด (kB/s): [0: ใช้ค่าพื้นฐาน]",
   "DLG_TORRENTPROP_1_GEN_08":"จำนวนช่องของการส่งข้อมูล : [0: ใช้ค่าพื้นฐาน]",
   "DLG_TORRENTPROP_1_GEN_10":"ส่งต่อขณะที่",
   "DLG_TORRENTPROP_1_GEN_11":"ใช้แทนค่าพื้นฐาน",
   "DLG_TORRENTPROP_1_GEN_12":"Minimum ratio (%):",
   "DLG_TORRENTPROP_1_GEN_14":"Minimum seeding time (minutes):",
   "DLG_TORRENTPROP_1_GEN_16":"ปรับแต่งอื่นๆ",
   "DLG_TORRENTPROP_1_GEN_17":"Initial Seeding",
   "DLG_TORRENTPROP_1_GEN_18":"ใช้งาน DHT",
   "DLG_TORRENTPROP_1_GEN_19":"แลกเปลี่ยนเพียร์กันเอง",
   "DLG_ADDEDITRSSFEED_03":"Feed",
   "DLG_ADDEDITRSSFEED_04":"Feed URL:",
   "DLG_ADDEDITRSSFEED_05":"ปรับแต่งความละเอียด:",
   "DLG_ADDEDITRSSFEED_06":"ลงทะเบียน",
   "DLG_ADDEDITRSSFEED_07":"อย่าดาวน์โหลดรายการทั้งหมดโดยอัตโนมัติ",
   "DLG_ADDEDITRSSFEED_08":"ดาวน์โหลดรายการทั้งหมดที่ประกาศในพาดหัวโดยอัตโนมัติ",
   "DLG_ADDEDITRSSFEED_09":"ใช้ตัวกรองระบบกรองเลขตอนอัจฉริยะ",
   "DLG_RSSDOWNLOADER_02":"Feeds||รายการโปรด||ประวัติ||",
   "DLG_RSSDOWNLOADER_03":"All Feeds",
   "DLG_RSSDOWNLOADER_04":"ตั้งค่ากรองข้อมูล",
   "DLG_RSSDOWNLOADER_05":"ชื่อ:",
   "DLG_RSSDOWNLOADER_06":"กรองข้อมูล:",
   "DLG_RSSDOWNLOADER_07":"ไม่ใช่:",
   "DLG_RSSDOWNLOADER_08":"บันทึกใน:",
   "DLG_RSSDOWNLOADER_09":"Quality:",
   "DLG_RSSDOWNLOADER_10":"คุณภาพ:",
   "DLG_RSSDOWNLOADER_11":"หมายเลขตอน: [ตย. 1x12-14]",
   "DLG_RSSDOWNLOADER_12":"กรองข้อมูลโดยชื่อดั้งเดิมแทนชื่อที่ถอดรหัสแล้ว",
   "DLG_RSSDOWNLOADER_13":"ไม่เริ่มรับแฟ้มโดยอัตโนมัติ",
   "DLG_RSSDOWNLOADER_14":"ระบบกรองเลขตอนอัจฉริยะ",
   "DLG_RSSDOWNLOADER_15":"ให้สิทธิ์สูงสุดในการรับข้อมูล",
   "DLG_RSSDOWNLOADER_16":"ช่วงเวลาน้อยที่สุด:",
   "DLG_RSSDOWNLOADER_17":"ป้ายชื่อสำหรับแฟ้มแฟ้มส่งต่อใหม่:",
   "DLG_RSSDOWNLOADER_18":"เพิ่มพาดหัว RSS...",
   "DLG_RSSDOWNLOADER_19":"แก้ไขพาดหัว...",
   "DLG_RSSDOWNLOADER_20":"ปิดการใช้พาดหัว",
   "DLG_RSSDOWNLOADER_21":"เปิดกาใช้พาดหัว",
   "DLG_RSSDOWNLOADER_22":"ปรับปรุงพาดหัว",
   "DLG_RSSDOWNLOADER_23":"ลบพาดหัว",
   "DLG_RSSDOWNLOADER_24":"ดาวน์โหลด",
   "DLG_RSSDOWNLOADER_25":"เปิด URL ในเบราว์เซอร์",
   "DLG_RSSDOWNLOADER_26":"เพิ่มไปยังรายการโปรด",
   "DLG_RSSDOWNLOADER_27":"เพิ่ม",
   "DLG_RSSDOWNLOADER_28":"ลบ",
   "DLG_RSSDOWNLOADER_29":"ทั้งหมด",
   "DLG_RSSDOWNLOADER_30":"(ทั้งหมด)",
   "DLG_RSSDOWNLOADER_31":"(เทียบเสมอ)||(เทียบครั้งแรกเท่านั้น)||12 ชั่วโมง||1 วัน||2 วัน||3 วัน||4 วัน||1 สัปดาห์||2 สัปดาห์||3 สัปดาห์||1 เดือน||",
   "DLG_RSSDOWNLOADER_32":"เพิ่มพาดหัว RSS",
   "DLG_RSSDOWNLOADER_33":"แก้ไขพาดหัว RSS",
   "DLG_RSSDOWNLOADER_34":"Remove RSS Feed(s)",
   "DLG_RSSDOWNLOADER_35":"Really delete the %d selected RSS Feeds?",
   "DLG_RSSDOWNLOADER_36":"ต้องการลบ RSS Feed \"%s\" หรือไม่ ?",
   "FEED_COL_FULLNAME":"ชื่อเต็ม",
   "FEED_COL_NAME":"ชื่อ",
   "FEED_COL_EPISODE":"ตอน",
   "FEED_COL_FORMAT":"รูปแบบ",
   "FEED_COL_CODEC":"ตัวเข้ารหัส",
   "FEED_COL_DATE":"Date",
   "FEED_COL_FEED":"Feed",
   "FEED_COL_URL":"URL แหล่ง",
   "PRS_COL_IP":"ไอพี",
   "PRS_COL_PORT":"พอร์ต",
   "PRS_COL_CLIENT":"ลูกข่าย",
   "PRS_COL_FLAGS":"รหัส",
   "PRS_COL_PCNT":"%",
   "PRS_COL_RELEVANCE":"ที่เกี่ยวข้อง",
   "PRS_COL_DOWNSPEED":"รับเร็ว",
   "PRS_COL_UPSPEED":"ส่งเร็ว",
   "PRS_COL_REQS":"Reqs",
   "PRS_COL_WAITED":"รอ",
   "PRS_COL_UPLOADED":"ส่งแล้ว",
   "PRS_COL_DOWNLOADED":"รับแล้ว",
   "PRS_COL_HASHERR":"Hasherr",
   "PRS_COL_PEERDL":"เพียร์รับ",
   "PRS_COL_MAXUP":"ส่งสูงสุด",
   "PRS_COL_MAXDOWN":"รับสูงสุด",
   "PRS_COL_QUEUED":"รอคิว",
   "PRS_COL_INACTIVE":"ไม่ติดต่อ",
   "FI_COL_DONE":"มีแล้ว",
   "FI_COL_FIRSTPC":"ชิ้นแรก",
   "FI_COL_NAME":"ชื่อ",
   "FI_COL_NUMPCS":"# ชิ้น",
   "FI_COL_PCNT":"Pieces",
   "FI_COL_PRIO":"ความสำคัญ",
   "FI_COL_SIZE":"ขนาด",
   "FI_PRI0":"ละเว้น",
   "FI_PRI1":"ต่ำ",
   "FI_PRI2":"ปกติ",
   "FI_PRI3":"สูง",
   "GN_TP_01":"รับข้อมูลแล้ว:",
   "GN_TP_02":"ส่งข้อมูลแล้ว:",
   "GN_TP_03":"Seeds:",
   "GN_TP_04":"ที่เหลือ:",
   "GN_TP_05":"รับข้อมูลเร็ว:",
   "GN_TP_06":"ส่งข้อมูลเร็ว:",
   "GN_TP_07":"เพียร์:",
   "GN_TP_08":"สัดส่วนส่งต่อรับ:",
   "GN_TP_09":"บันทึกที่:",
   "GN_TP_10":"Hash:",
   "GN_GENERAL":"ทั่วไป",
   "GN_TRANSFER":"การถ่ายโอน",
   "GN_XCONN":"ติดต่อกับ %d จาก %d (ทั้งหมด %d)",
   "MAIN_TITLEBAR_SPEED":"รับ:%s ส่ง:%s - %s",
   "MENU_COPY":"คัดลอก",
   "MENU_RESET":"คืนค่าตั้งต้น",
   "MENU_UNLIMITED":"ไม่จำกัด",
   "MP_RESOLVE_IPS":"แปลง IP เป็นชื่อ",
   "MF_GETFILE":"Get File(s)",
   "MF_DONT":"ไม่ดาวน์โหลด",
   "MF_HIGH":"สำคัญสูง",
   "MF_LOW":"สำคัญต่ำ",
   "MF_NORMAL":"สำคัญปกติ",
   "ML_COPY_MAGNETURI":"คัดลอก URI แม่เหล็ก",
   "ML_DELETE_DATA":"ลบข้อมูล",
   "ML_DELETE_TORRENT":"ลบ .torrent",
   "ML_DELETE_DATATORRENT":"ลบ .torrent + ข้อมูล",
   "ML_FORCE_RECHECK":"บังคับตรวจข้อมูล",
   "ML_FORCE_START":"บังคับเริ่ม",
   "ML_LABEL":"ป้ายชื่อ",
   "ML_PAUSE":"พัก",
   "ML_PROPERTIES":"คุณสมบัติ",
   "ML_QUEUEDOWN":"ย้ายรายการลง",
   "ML_QUEUEUP":"ย้ายรายการขึ้น",
   "ML_REMOVE":"ลบ",
   "ML_REMOVE_AND":"ลบและ",
   "ML_START":"เริ่ม",
   "ML_STOP":"หยุด",
   "OV_CAT_ACTIVE":"ทำงาน",
   "OV_CAT_ALL":"ทั้งหมด",
   "OV_CAT_COMPL":"เสร็จ",
   "OV_CAT_DL":"ยังไม่เสร็จ",
   "OV_CAT_INACTIVE":"ไม่ทำงาน",
   "OV_CAT_NOLABEL":"ไม่มีป้ายชื่อ",
   "OV_COL_AVAIL":"||# ชุด||จำนวนชุด",
   "OV_COL_DATE_ADDED":"เพิ่มเมื่อ",
   "OV_COL_DATE_COMPLETED":"เสร็จสมบูรณ์เมื่อ",
   "OV_COL_DONE":"มีแล้ว",
   "OV_COL_DOWNLOADED":"รับแล้ว",
   "OV_COL_DOWNSPD":"รับเร็ว",
   "OV_COL_ETA":"ประมาณ",
   "OV_COL_LABEL":"ป้ายชื่อ",
   "OV_COL_NAME":"ชื่อ",
   "OV_COL_ORDER":"#",
   "OV_COL_PEERS":"เพียร์",
   "OV_COL_REMAINING":"ที่เหลือ",
   "OV_COL_SEEDS":"Seeds",
   "OV_COL_SEEDS_PEERS":"ส่งต่อ/เพียร์",
   "OV_COL_SHARED":"สัดส่วน",
   "OV_COL_SIZE":"ขนาด",
   "OV_COL_SOURCE_URL":"URL แหล่ง",
   "OV_COL_STATUS":"สถานะ",
   "OV_COL_UPPED":"ส่งแล้ว",
   "OV_COL_UPSPD":"ส่งเร็ว",
   "OV_CONFIRM_DELETEDATA_MULTIPLE":"คุณแน่ใจหรือไม่ว่าต้องการที่จะเอา %d แฟ้มส่งต่อที่เลือกและข้อมูลที่เกี่ยวข้องออก",
   "OV_CONFIRM_DELETEDATA_ONE":"คุณแน่ใจหรือไม่ว่าต้องการที่จะเอาแฟ้มส่งต่อที่เลือกและข้อมูลที่เกี่ยวข้องออก",
   "OV_CONFIRM_DELETE_MULTIPLE":"คุณแน่ใจหรือไม่ว่าต้องการที่จะเอา %d แฟ้มส่งต่อที่เลือกออก",
   "OV_CONFIRM_DELETE_ONE":"คุณแน่ใจหรือไม่ว่าต้องการที่จะเอาแฟ้มส่งต่อที่เลือกออก",
   "OV_CONFIRM_DELETE_RSSFILTER":"ต้องการลบ RSS Filter \"%s\" จริงหรือ ?",
   "OV_FL_CHECKED":"ตรวจสอบ %:.1d%",
   "OV_FL_DOWNLOADING":"รับข้อมูล",
   "OV_FL_ERROR":"ผิดพลาด: %s",
   "OV_FL_FINISHED":"เสร็จสิ้น",
   "OV_FL_PAUSED":"พัก",
   "OV_FL_QUEUED":"รอคิว",
   "OV_FL_QUEUED_SEED":"รอคิว seed",
   "OV_FL_SEEDING":"กำลัง seed",
   "OV_FL_STOPPED":"หยุด",
   "OV_NEWLABEL_CAPTION":"ป้อนชื่อ",
   "OV_NEWLABEL_TEXT":"ป้อนชื่อใหม่สำหรับแฟ้มส่งต่อที่เลือก:",
   "OV_NEW_LABEL":"ป้ายชื่อใหม่ ...",
   "OV_REMOVE_LABEL":"ลบป้ายชื่อ",
   "OV_TABS":"ทั่วไป||ผู้ส่งต่อ||เพียร์||ชิ้นส่วน||แฟ้ม||ความเร็ว||ตัวบันทึกเหตุการณ์||",
   "OV_TB_ADDTORR":"เพิ่ม Torrent",
   "OV_TB_ADDURL":"เพิ่มแฟ้มส่งต่อจาก URL",
   "OV_TB_PAUSE":"พัก",
   "OV_TB_PREF":"การตั้งค่า",
   "OV_TB_QUEUEDOWN":"ย้ายรายการลง",
   "OV_TB_QUEUEUP":"ย้ายรายการขึ้น",
   "OV_TB_REMOVE":"ลบ",
   "OV_TB_RSSDOWNLDR":"เครื่องมือดาวน์โหลด RSS",
   "OV_TB_START":"เริ่ม",
   "OV_TB_STOP":"หยุด",
   "MM_FILE":"แฟ้ม",
   "MM_FILE_ADD_TORRENT":"เพิ่มแฟ้มส่งต่อ...",
   "MM_FILE_ADD_URL":"เพิ่มแฟ้มส่งต่อจาก URL...",
   "MM_OPTIONS":"ตัวเลือก",
   "MM_OPTIONS_PREFERENCES":"การตั้งค่า",
   "MM_OPTIONS_SHOW_CATEGORY":"แสดงหมวด",
   "MM_OPTIONS_SHOW_DETAIL":"แสดงรายละเอียดข้อมูล",
   "MM_OPTIONS_SHOW_STATUS":"แสดงแถบสถานะ",
   "MM_OPTIONS_SHOW_TOOLBAR":"แสดงแถบเครื่องมือ",
   "MM_OPTIONS_TAB_ICONS":"ไอคอนบนแทป",
   "MM_HELP":"วิธีใช้",
   "MM_HELP_UT_WEBPAGE":"เว็บเพจ µTorrent",
   "MM_HELP_UT_FORUMS":"ศูนย์รวมกระทู้ µTorrent",
   "MM_HELP_WEBUI_FEEDBACK":"Send WebUI Feedback",
   "MM_HELP_ABOUT_WEBUI":"About µTorrent WebUI",
   "STM_TORRENTS":"ตัวส่งต่อ",
   "STM_TORRENTS_PAUSEALL":"พักงานทั้งหมด",
   "STM_TORRENTS_RESUMEALL":"เริ่มงานต่อทั้งหมด",
   "SB_DOWNLOAD":"D: %s%z/s",
   "SB_LOCAL":" L: %z/s",
   "SB_OVERHEAD":" O: %z/s",
   "SB_TOTAL":" T: %Z",
   "SB_UPLOAD":"U: %s%z/s",
   "SIZE_B":"B",
   "SIZE_EB":"EB",
   "SIZE_GB":"GB",
   "SIZE_KB":"kB",
   "SIZE_MB":"MB",
   "SIZE_PB":"PB",
   "SIZE_TB":"TB",
   "ST_CAPT_ADVANCED":"ขั้นสูง",
   "ST_CAPT_BANDWIDTH":"ความถี่",
   "ST_CAPT_CONNECTION":"การเชื่อมต่อ",
   "ST_CAPT_DISK_CACHE":"ดิสก์แคช",
   "ST_CAPT_FOLDER":"ไดเรกทอรี่",
   "ST_CAPT_GENERAL":"ทั่วไป",
   "ST_CAPT_SCHEDULER":"ตารางเวลา",
   "ST_CAPT_QUEUEING":"การจัดลำดับ",
   "ST_CAPT_UI_EXTRAS":"UI Extras",
   "ST_CAPT_UI_SETTINGS":"การตั้งค่า UI",
   "ST_CAPT_BITTORRENT":"BitTorrent",
   "ST_CAPT_WEBUI":"เว็บ UI",
   "ST_CAPT_TRANSFER_CAP":"Transfer Cap",
   "ST_CAPT_RUN_PROGRAM":"เรียกใช้โปรแกรม",
   "ST_CBO_UI_DBLCLK_TOR":"แสดงรายละเอียด||เริ่ม/หยุด||เปิดโฟลเดอร์||แสดงแถบรับข้อมูล||",
   "ST_CBO_ENCRYPTIONS":"ไม่ใช้||ใช้งาน||บังคับใช้||",
   "ST_CBO_PROXY":"(ไม่มี)||Socks4||Socks5||HTTPS||HTTP||",
   "ST_CBO_TCAP_MODES":"อัปโหลด||ดาวน์โหลด||อัปโหลด + ดาวน์โหลด||",
   "ST_CBO_TCAP_UNITS":"MB||GB||",
   "ST_CBO_TCAP_PERIODS":"1||2||5||7||10||14||15||20||21||28||30||31||",
   "ST_COL_NAME":"ชื่อ",
   "ST_COL_VALUE":"ค่า",
   "ST_SCH_DAYCODES":"จ.||อ.||พ.||พฤ.||ศ.||ส.||อา.||",
   "ST_SCH_DAYNAMES":"จันทร์||อังคาร||พุธ||พฤหัสบดี||ศุกร์||เสาร์||อาทิตย์||",
   "ST_SCH_LGND_FULL":"ความเร็วเต็มที่",
   "ST_SCH_LGND_FULLEX":"ความเร็วสูงสุด - ใช้การจำกัดความถี่ ทั่วโลกทั่วไป",
   "ST_SCH_LGND_LIMITED":"จำกัด",
   "ST_SCH_LGND_LIMITEDEX":"จำกัด - ใช้การจำกัดความถี่ ตามการระบุของตัวจัดการงาน",
   "ST_SCH_LGND_SEEDING":"ส่งต่อเท่านั้น",
   "ST_SCH_LGND_SEEDINGEX":"ส่งต่อเท่านั้น - อัปโหลดข้อมูลเท่านั้น (รวมทั้งที่ยังไม่เสร็จสมบูรณ์)",
   "ST_SCH_LGND_OFF":"ปิด",
   "ST_SCH_LGND_OFFEX":"ปิด - หยุดแฟ้มส่งต่อทั้งหด ที่ไม่ได้มีการบังคับ",
   "ST_SEEDTIMES_HOURS":"<= %d ชั่วโมง",
   "ST_SEEDTIMES_IGNORE":"(เพิกเฉย)",
   "ST_SEEDTIMES_MINUTES":"<= %d นาที",
   "TIME_DAYS_HOURS":"%dd %dh",
   "TIME_HOURS_MINS":"%dh %dm",
   "TIME_MINS_SECS":"%dm %ds",
   "TIME_SECS":"%ds",
   "TIME_WEEKS_DAYS":"%dw %dd",
   "TIME_YEARS_WEEKS":"%dy %dw",
   "ML_MORE_ACTIONS":null,
   "Torrents":null,
   "Feeds":null,
   "App":null,
   "country":null,
   "ETA":null,
   "of":null,
   "/s":null,
   "Paste a torrent or feed URL":null,
   "Home":null,
   "Logout":null,
   "Seeding":null,
   "All Feeds":null,
   "bitrate":null,
   "resolution":null,
   "length":null,
   "streamable":null,
   "type":null,
   "remote":null,
   "about":null,
   "sessions":null,
   "share":null,
   "Share this torrent":null,
   "Share link":null,
   "add":null,
   "logout":null,
   "log in":null,
   "anywhere access":null,
   "stay signed in":null,
   "download":null,
   "Your client is currently not available. Verify that it is connected to the internet.":null,
   "Unable to communicate with your &micro;Torrent client. This message will disappear automatically when a connection is re-established.":null,
   "Open file":null,
   "Download to your computer":null,
   "Open with VLC Media Player":null,
   "Actions":null,
   "season":null,
   "DLG_ABOUT_VERSION_LEGEND":null,
   "DLG_ABOUT_VERSION_VERSION":null,
   "DLG_ABOUT_VERSION_REVISION":null,
   "DLG_ABOUT_VERSION_BUILD_DATE":null,
   "DLG_ABOUT_VERSION_PEER_ID":null,
   "DLG_ABOUT_VERSION_USER_AGENT":null,
   "DLG_ABOUT_UPNP_EXTERNAL_ADDRESS":null,
   "DLG_ABOUT_UI_REVISION":null,
   "DLG_SETTINGS_SAVE":null,
   "DLG_SETTINGS_MENU_TITLE":null,
   "DLG_SETTINGS_D_REMOTE_01":"BitTorrent Remote",
   "DLG_SETTINGS_D_REMOTE_02":"BitTorrent Remote provides an easy and highly secure way of accessing your client through a browser.",
   "DLG_SETTINGS_D_REMOTE_03":"Just enable the connection below, choose a computer name and password and remember to leave this computer on.",
   "DLG_SETTINGS_D_REMOTE_04":"เรียนรู้เพิ่มเติม",
   "DLG_SETTINGS_D_REMOTE_05":"เปิดใช้ BitTorrent Remote Access",
   "DLG_SETTINGS_D_REMOTE_06":"แสดงตัวผู้ใช้",
   "DLG_SETTINGS_D_REMOTE_07":"ชื่อผู้ใช้:",
   "DLG_SETTINGS_D_REMOTE_08":"รหัสผ่าน:",
   "DLG_SETTINGS_D_REMOTE_09":"ส่ง",
   "ST_CAPT_REMOTE":"BitTorrent Remote"
}