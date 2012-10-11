/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR =
{
   "CT_MASK1":"Torrenti failid||*.torrent||Kõik failid (*.*)||*.*||",
   "DLG_BTN_OK":"OK",
   "DLG_BTN_CANCEL":"Loobu",
   "DLG_BTN_APPLY":"Rakenda",
   "DLG_BTN_YES":"Jah",
   "DLG_BTN_NO":"Ei",
   "DLG_BTN_CLOSE":"Sulge",
   "DLG_SETTINGS_00":"Eelistused",
   "DLG_SETTINGS_1_GENERAL_01":"Keel",
   "DLG_SETTINGS_1_GENERAL_02":"Keel:",
   "DLG_SETTINGS_1_GENERAL_10":"Privaatsus",
   "DLG_SETTINGS_1_GENERAL_11":"Kontrolli uuendusi automaatselt",
   "DLG_SETTINGS_1_GENERAL_12":"Uuenda beetaversioonideks",
   "DLG_SETTINGS_1_GENERAL_13":"Saada anonüümset informatsiooni uuendusi kontrollides",
   "DLG_SETTINGS_1_GENERAL_17":"Allalaadimise ajal",
   "DLG_SETTINGS_1_GENERAL_18":"Lisa .!ut lõpetamata failidele",
   "DLG_SETTINGS_1_GENERAL_19":"Hõiva kõigi failide ruum",
   "DLG_SETTINGS_1_GENERAL_20":"Hoia ära puhkerežiim kui on aktiivseid torrenteid",
   "DLG_SETTINGS_2_UI_01":"Vaate valikud",
   "DLG_SETTINGS_2_UI_02":"Kinnita torrentite kustutamine",
   "DLG_SETTINGS_2_UI_03":"Kinnita jälitajate kustutamine",
   "DLG_SETTINGS_2_UI_04":"Näita väljumisel kinnitamisdialoogi",
   "DLG_SETTINGS_2_UI_05":"Nimekirjal vahelduv taustavärv",
   "DLG_SETTINGS_2_UI_06":"Näita hetkekiirust tiitliribal",
   "DLG_SETTINGS_2_UI_07":"Näita kiiruselimiite olekuribal",
   "DLG_SETTINGS_2_UI_15":"Torrentite lisamisel",
   "DLG_SETTINGS_2_UI_16":"Ära alusta allalaadimist automaatselt",
   "DLG_SETTINGS_2_UI_17":"Aktiveeri programmiaken",
   "DLG_SETTINGS_2_UI_18":"Näita akent, mis näitab torrentis olevaid faile",
   "DLG_SETTINGS_2_UI_19":"Topeltklõpsu tegevused",
   "DLG_SETTINGS_2_UI_20":"Jagatavatel torrentitel:",
   "DLG_SETTINGS_2_UI_22":"Allalaaditavatel torrentitel:",
   "DLG_SETTINGS_3_PATHS_01":"Allalaaditud failide asukoht",
   "DLG_SETTINGS_3_PATHS_02":"Paiguta uued allalaadimised:",
   "DLG_SETTINGS_3_PATHS_03":"Näita dialoogi manuaalsel lisamisel",
   "DLG_SETTINGS_3_PATHS_06":"Liiguta lõpetatud allalaadimised:",
   "DLG_SETTINGS_3_PATHS_07":"Lisa torrenti silt",
   "DLG_SETTINGS_3_PATHS_10":"Liiguta ainult vaikimisi allalaadimiste kaustast",
   "DLG_SETTINGS_3_PATHS_11":".torrentite asukoht",
   "DLG_SETTINGS_3_PATHS_12":"Hoia .torrenteid:",
   "DLG_SETTINGS_3_PATHS_15":"Liiguta lõpetatud tööde .torrentid:",
   "DLG_SETTINGS_3_PATHS_18":"Automaatselt laadi .torrentid:",
   "DLG_SETTINGS_3_PATHS_19":"Kustuta laetud .torrentid",
   "DLG_SETTINGS_4_CONN_01":"Kuulatav port",
   "DLG_SETTINGS_4_CONN_02":"Port sissetulevate ühenduste jaoks:",
   "DLG_SETTINGS_4_CONN_04":"Suvaline port",
   "DLG_SETTINGS_4_CONN_05":"Suvaline port igal käivitumisel",
   "DLG_SETTINGS_4_CONN_06":"Luba UPnP pordi sidumine",
   "DLG_SETTINGS_4_CONN_07":"Luba NAT-PMP pordi sidumine",
   "DLG_SETTINGS_4_CONN_08":"Puhverserver",
   "DLG_SETTINGS_4_CONN_09":"Tüüp:",
   "DLG_SETTINGS_4_CONN_11":"Server:",
   "DLG_SETTINGS_4_CONN_13":"Port:",
   "DLG_SETTINGS_4_CONN_15":"Autentimine",
   "DLG_SETTINGS_4_CONN_16":"Kasutaja:",
   "DLG_SETTINGS_4_CONN_18":"Parool:",
   "DLG_SETTINGS_4_CONN_19":"Lahenda hostinimed läbi puhverserveri",
   "DLG_SETTINGS_4_CONN_20":"Kasuta puhverserverit P2P ühendusteks",
   "DLG_SETTINGS_4_CONN_21":"Lisa erand Windowsi tulemüüri",
   "DLG_SETTINGS_4_CONN_22":"Puhverserveri privaatsus",
   "DLG_SETTINGS_4_CONN_23":"Keela kõik kohalikud DNS lookup päringud",
   "DLG_SETTINGS_4_CONN_24":"Keela võimalused, mis lekitavad identifitseeritavat infot",
   "DLG_SETTINGS_4_CONN_25":"Keela ühendused, mis pole puhverserveri poolt toetatud",
   "DLG_SETTINGS_5_BANDWIDTH_01":"Üldine üleslaadimise piirang",
   "DLG_SETTINGS_5_BANDWIDTH_02":"Maks. üleslaadimine (kB/s): [0: piiramatu]",
   "DLG_SETTINGS_5_BANDWIDTH_03":"Automaatne",
   "DLG_SETTINGS_5_BANDWIDTH_05":"Üleslaadimise kiirus kui allalaadimist ei toimu (kB/s):",
   "DLG_SETTINGS_5_BANDWIDTH_07":"Üldine allalaadimise piirang",
   "DLG_SETTINGS_5_BANDWIDTH_08":"Maks. allalaadimine (kB/s): [0: piiramatu]",
   "DLG_SETTINGS_5_BANDWIDTH_10":"Ühenduste arv",
   "DLG_SETTINGS_5_BANDWIDTH_11":"Üldine maksimaalne arv ühendusi:",
   "DLG_SETTINGS_5_BANDWIDTH_14":"Maksimaalne arv ühendusi torrenti kohta:",
   "DLG_SETTINGS_5_BANDWIDTH_15":"Üleslaadimise pesasid torrenti kohta:",
   "DLG_SETTINGS_5_BANDWIDTH_17":"Kasuta lisapesasid, kui üleslaadimiskiirus on < 90%",
   "DLG_SETTINGS_5_BANDWIDTH_18":"Global Rate Limit Options",
   "DLG_SETTINGS_5_BANDWIDTH_19":"Rakenda kiirusepiirang transpordiülekulule",
   "DLG_SETTINGS_5_BANDWIDTH_20":"Rakenda kiirusepiirang uTP ühendustele",
   "DLG_SETTINGS_6_BITTORRENT_01":"Põhilised BitTorrenti omadused",
   "DLG_SETTINGS_6_BITTORRENT_02":"Luba DHT võrk",
   "DLG_SETTINGS_6_BITTORRENT_03":"Küsi jälitajalt kaapimise infot",
   "DLG_SETTINGS_6_BITTORRENT_04":"Luba DHT uutele torrentitele",
   "DLG_SETTINGS_6_BITTORRENT_05":"Luba peeride vahetus",
   "DLG_SETTINGS_6_BITTORRENT_06":"Luba kohalike peeride leidmine",
   "DLG_SETTINGS_6_BITTORRENT_07":"Piira kohalike peeride võrgukoormus",
   "DLG_SETTINGS_6_BITTORRENT_08":"Jälitajale näidatav IP/hostinimi:",
   "DLG_SETTINGS_6_BITTORRENT_10":"Protokolli krüpteering",
   "DLG_SETTINGS_6_BITTORRENT_11":"Väljuvad:",
   "DLG_SETTINGS_6_BITTORRENT_13":"Luba vanemat tüüpi ühendusi",
   "DLG_SETTINGS_6_BITTORRENT_14":"Luba võrgukoormuse haldamine [uTP]",
   "DLG_SETTINGS_6_BITTORRENT_15":"Luba UDP jälitaja tugi",
   "DLG_SETTINGS_7_TRANSFERCAP_01":"Luba mahupiirang",
   "DLG_SETTINGS_7_TRANSFERCAP_02":"Piiraja seaded",
   "DLG_SETTINGS_7_TRANSFERCAP_03":"Piirangu tüüp:",
   "DLG_SETTINGS_7_TRANSFERCAP_04":"Võrgukoormuse piirang:",
   "DLG_SETTINGS_7_TRANSFERCAP_05":"Ajaperiood (päeva):",
   "DLG_SETTINGS_7_TRANSFERCAP_06":"Kasutamise ajalugu valitud perioodile:",
   "DLG_SETTINGS_7_TRANSFERCAP_07":"Üles laaditud:",
   "DLG_SETTINGS_7_TRANSFERCAP_08":"Alla laaditud:",
   "DLG_SETTINGS_7_TRANSFERCAP_09":"Üles + alla laaditud:",
   "DLG_SETTINGS_7_TRANSFERCAP_10":"Ajaperiood:",
   "DLG_SETTINGS_7_TRANSFERCAP_11":"Viimased %d päeva",
   "DLG_SETTINGS_7_TRANSFERCAP_12":"Nulli ajalugu",
   "DLG_SETTINGS_8_QUEUEING_01":"Järjekorra seaded",
   "DLG_SETTINGS_8_QUEUEING_02":"Aktiivseid torrenteid kokku (üles- või allalaadimisi):",
   "DLG_SETTINGS_8_QUEUEING_04":"Aktiivseid allalaadimisi kokku:",
   "DLG_SETTINGS_8_QUEUEING_06":"Jaga kuni [vaikimisi väärtused]",
   "DLG_SETTINGS_8_QUEUEING_07":"Minimaalne suhe (%):",
   "DLG_SETTINGS_8_QUEUEING_09":"Minimaalne jagamise aeg (minutit):",
   "DLG_SETTINGS_8_QUEUEING_11":"Jagamine on prioriteetsem kui allalaadimine",
   "DLG_SETTINGS_8_QUEUEING_12":"Kui µTorrent jõuab jagamise eesmärgini",
   "DLG_SETTINGS_8_QUEUEING_13":"Piira üleslaadimise kiirus (kB/s): [0: seiska]",
   "DLG_SETTINGS_9_SCHEDULER_01":"Käivita planeerija",
   "DLG_SETTINGS_9_SCHEDULER_02":"Planeerija tabel",
   "DLG_SETTINGS_9_SCHEDULER_04":"Planeerija seaded",
   "DLG_SETTINGS_9_SCHEDULER_05":"Piiratud üleslaadimine (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_07":"Piiratud allalaadimine (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_09":"Keela DHT kui väljas",
   "DLG_SETTINGS_9_WEBUI_01":"Luba veebiliides",
   "DLG_SETTINGS_9_WEBUI_02":"Autentimine",
   "DLG_SETTINGS_9_WEBUI_03":"Kasutaja:",
   "DLG_SETTINGS_9_WEBUI_05":"Parool:",
   "DLG_SETTINGS_9_WEBUI_07":"Luba külalise konto kasutajanimega:",
   "DLG_SETTINGS_9_WEBUI_09":"Ühendatavus",
   "DLG_SETTINGS_9_WEBUI_10":"Alternatiivne kuulamise port (vaikimisi on ühenduse port):",
   "DLG_SETTINGS_9_WEBUI_12":"Keela järgmised IP-d (eralda erinevad IP-d komaga):",
   "DLG_SETTINGS_A_ADVANCED_01":"Täpsemad valikud [HOIATUS: mitte muuta!]",
   "DLG_SETTINGS_A_ADVANCED_02":"Väärtus:",
   "DLG_SETTINGS_A_ADVANCED_03":"tõene",
   "DLG_SETTINGS_A_ADVANCED_04":"väär",
   "DLG_SETTINGS_A_ADVANCED_05":"Määra",
   "DLG_SETTINGS_B_ADV_UI_01":"Kiiruste menüü [eralda erinevad väärtused komaga]",
   "DLG_SETTINGS_B_ADV_UI_02":"Võta üle kiiruste menüü",
   "DLG_SETTINGS_B_ADV_UI_03":"Üleslaadimise kiirused:",
   "DLG_SETTINGS_B_ADV_UI_05":"Allalaadimise kiirused:",
   "DLG_SETTINGS_B_ADV_UI_07":"Püsivad sildid [Eralda erinevad sildid | märgiga]",
   "DLG_SETTINGS_B_ADV_UI_08":"Otsingumootorid [formaat: nimi|URL]",
   "DLG_SETTINGS_C_ADV_CACHE_01":"Põhilised vahemälu seaded",
   "DLG_SETTINGS_C_ADV_CACHE_02":"Ketta vahemälu on tihedalt kasutatavate andmete mälus hoidmiseks, et vähendada lugemiste ja kirjutamiste arvu kettale. µTorrent haldab vahemälu automaatselt, aga võid selle käitumist muuta nende seadete muutmisega.",
   "DLG_SETTINGS_C_ADV_CACHE_03":"Võta üle automaatne vahemälu suurus ja määra suurus käsitsi (MB):",
   "DLG_SETTINGS_C_ADV_CACHE_05":"Vähenda mälukasutust, kui vahemälu ei vajata",
   "DLG_SETTINGS_C_ADV_CACHE_06":"Täpsemad vahemälu seaded",
   "DLG_SETTINGS_C_ADV_CACHE_07":"Luba kettale kirjutamise vahemälu",
   "DLG_SETTINGS_C_ADV_CACHE_08":"Kirjuta puutumata plokid välja iga 2 minuti tagant",
   "DLG_SETTINGS_C_ADV_CACHE_09":"Kirjuta lõpetatud tükid kohe välja",
   "DLG_SETTINGS_C_ADV_CACHE_10":"Luba kettale lugemiste vahemälu",
   "DLG_SETTINGS_C_ADV_CACHE_11":"Lülita lugemiste vahemälu välja, kui madal üleslaadimise kiirus",
   "DLG_SETTINGS_C_ADV_CACHE_12":"Eemalda vanad plokid vahemälust",
   "DLG_SETTINGS_C_ADV_CACHE_13":"Suurenda automaatse vahemälu suurust kui vahemälu risustub",
   "DLG_SETTINGS_C_ADV_CACHE_14":"Keela Windowsi kettale kirjutamise vahemälu",
   "DLG_SETTINGS_C_ADV_CACHE_15":"Keela Windowsi kettalt lugemise vahemälu",
   "DLG_SETTINGS_C_ADV_RUN_01":"Käivita programm",
   "DLG_SETTINGS_C_ADV_RUN_02":"Käivita see programm kui torrent lõpetab:",
   "DLG_SETTINGS_C_ADV_RUN_04":"Käivita see programm kui torrenti olek muutub:",
   "DLG_SETTINGS_C_ADV_RUN_06":"Võid kasutada neid käske:\r\n%F - Alla laaditud faili nimi (ühe failiga torrentid)\r\n%D - Kataloog kuhu failid salvestatakse\r\n%N - Torrenti nimi\r\n%S - Torrenti staatus\r\n%L - Silt\r\n%T - Jälitaja\r\n%M - Olekuteate tekst (sama mis olekuveerg)\r\n%I - hex encoded info-hash\r\n\r\nOlek on nende kombinatsioon:\r\nalustatud = 1, kontrollin = 2, käivita-peale-kontrolli = 4,\r\nkontrollitud = 8, viga = 16, peatatud = 32, auto = 64, laaditud = 128",
   "DLG_TORRENTPROP_00":"Torrenti omadused",
   "DLG_TORRENTPROP_1_GEN_01":"Jälitajad (eralda üksteisest tühja reaga)",
   "DLG_TORRENTPROP_1_GEN_03":"Võrgukoormuse seaded",
   "DLG_TORRENTPROP_1_GEN_04":"Maks. üleslaadimine (kB/s): [0: vaikimisi]",
   "DLG_TORRENTPROP_1_GEN_06":"Maks. allalaadimine (kB/s): [0: vaikimisi]",
   "DLG_TORRENTPROP_1_GEN_08":"Üleslaadimise pesasid: [tühi: kasuta vaikimisi]",
   "DLG_TORRENTPROP_1_GEN_10":"Jaga kuni",
   "DLG_TORRENTPROP_1_GEN_11":"Võta üle vaikimisi seaded",
   "DLG_TORRENTPROP_1_GEN_12":"Minimaalne suhe (%):",
   "DLG_TORRENTPROP_1_GEN_14":"Minimaalne jagamise aeg (minutit):",
   "DLG_TORRENTPROP_1_GEN_16":"Teised seaded",
   "DLG_TORRENTPROP_1_GEN_17":"Algjagamine",
   "DLG_TORRENTPROP_1_GEN_18":"Luba DHT",
   "DLG_TORRENTPROP_1_GEN_19":"Peeride vahetus",
   "DLG_ADDEDITRSSFEED_03":"Voog",
   "DLG_ADDEDITRSSFEED_04":"Voo URL:",
   "DLG_ADDEDITRSSFEED_05":"Enda nimetus:",
   "DLG_ADDEDITRSSFEED_06":"Tellimus",
   "DLG_ADDEDITRSSFEED_07":"Ära laadi kõiki faile automaatselt alla",
   "DLG_ADDEDITRSSFEED_08":"Automaatselt laadi alla kõik kanalis avaldatud failid",
   "DLG_ADDEDITRSSFEED_09":"Kasuta tarka episoodifiltrit",
   "DLG_RSSDOWNLOADER_02":"Vood||Lemmikud||Ajalugu||",
   "DLG_RSSDOWNLOADER_03":"All Feeds",
   "DLG_RSSDOWNLOADER_04":"Filtri seaded",
   "DLG_RSSDOWNLOADER_05":"Nimi:",
   "DLG_RSSDOWNLOADER_06":"Filter:",
   "DLG_RSSDOWNLOADER_07":"Mitte:",
   "DLG_RSSDOWNLOADER_08":"Salvesta:",
   "DLG_RSSDOWNLOADER_09":"Voog:",
   "DLG_RSSDOWNLOADER_10":"Kvaliteet:",
   "DLG_RSSDOWNLOADER_11":"Episoodi number: [näit. 1x12-14]",
   "DLG_RSSDOWNLOADER_12":"Filter võrdleb originaalnime dekodeeritud nime asemel",
   "DLG_RSSDOWNLOADER_13":"Ära alusta allalaadimist automaatselt",
   "DLG_RSSDOWNLOADER_14":"Tark episoodifilter",
   "DLG_RSSDOWNLOADER_15":"Allalaadimisel kõrgeim prioriteet",
   "DLG_RSSDOWNLOADER_16":"Minimaalne intervall:",
   "DLG_RSSDOWNLOADER_17":"Silt uue torrenti jaoks:",
   "DLG_RSSDOWNLOADER_18":"Lisa RSS-voog...",
   "DLG_RSSDOWNLOADER_19":"Muuda voogu...",
   "DLG_RSSDOWNLOADER_20":"Keela voog",
   "DLG_RSSDOWNLOADER_21":"Luba voog",
   "DLG_RSSDOWNLOADER_22":"Uuenda voogu",
   "DLG_RSSDOWNLOADER_23":"Kustuta voog",
   "DLG_RSSDOWNLOADER_24":"Laadi alla",
   "DLG_RSSDOWNLOADER_25":"Ava URL brauseris",
   "DLG_RSSDOWNLOADER_26":"Lisa lemmikutesse",
   "DLG_RSSDOWNLOADER_27":"Lisa",
   "DLG_RSSDOWNLOADER_28":"Kustuta",
   "DLG_RSSDOWNLOADER_29":"KÕIK",
   "DLG_RSSDOWNLOADER_30":"(Kõik)",
   "DLG_RSSDOWNLOADER_31":"(sobita alati)||(sobita ainult korra)||12 tundi||1 päev||2 päeva||3 päeva||4 päeva||1 nädal||2 nädalat||3 nädalat||1 kuu||",
   "DLG_RSSDOWNLOADER_32":"Lisa RSS-voog",
   "DLG_RSSDOWNLOADER_33":"Muuda RSS-voogu",
   "DLG_RSSDOWNLOADER_34":"Remove RSS Feed(s)",
   "DLG_RSSDOWNLOADER_35":"Really delete the %d selected RSS Feeds?",
   "DLG_RSSDOWNLOADER_36":"Päriselt kustutada RSS-voog \"%s\"?",
   "FEED_COL_FULLNAME":"Täielik nimi",
   "FEED_COL_NAME":"Nimi",
   "FEED_COL_EPISODE":"Episood",
   "FEED_COL_FORMAT":"Formaat",
   "FEED_COL_CODEC":"Koodek",
   "FEED_COL_DATE":"Date",
   "FEED_COL_FEED":"Voog",
   "FEED_COL_URL":"Allika URL",
   "PRS_COL_IP":"IP",
   "PRS_COL_PORT":"Port",
   "PRS_COL_CLIENT":"Klient",
   "PRS_COL_FLAGS":"Tähised",
   "PRS_COL_PCNT":"%",
   "PRS_COL_RELEVANCE":"Tähtsus",
   "PRS_COL_DOWNSPEED":"Alla kiirus",
   "PRS_COL_UPSPEED":"Üles kiirus",
   "PRS_COL_REQS":"Päringud",
   "PRS_COL_WAITED":"Oodanud",
   "PRS_COL_UPLOADED":"Üles laaditud",
   "PRS_COL_DOWNLOADED":"Alla laaditud",
   "PRS_COL_HASHERR":"Hashivigu",
   "PRS_COL_PEERDL":"Peeri al.",
   "PRS_COL_MAXUP":"Maks. alla",
   "PRS_COL_MAXDOWN":"Maks. üles",
   "PRS_COL_QUEUED":"Järjekorras",
   "PRS_COL_INACTIVE":"Passiivne",
   "FI_COL_DONE":"Valmis",
   "FI_COL_FIRSTPC":"Esimene tükk",
   "FI_COL_NAME":"Nimi",
   "FI_COL_NUMPCS":"Tükke",
   "FI_COL_PCNT":"%",
   "FI_COL_PRIO":"Prioriteet",
   "FI_COL_SIZE":"Suurus",
   "FI_PRI0":"jäta vahele",
   "FI_PRI1":"madal",
   "FI_PRI2":"normaalne",
   "FI_PRI3":"kõrge",
   "GN_TP_01":"Alla laaditud:",
   "GN_TP_02":"Üles laaditud:",
   "GN_TP_03":"Seemneid:",
   "GN_TP_04":"Aega jäänud:",
   "GN_TP_05":"Allalaadimiskiirus:",
   "GN_TP_06":"Üleslaadimiskiirus:",
   "GN_TP_07":"Peere:",
   "GN_TP_08":"Jagamise suhe:",
   "GN_TP_09":"Salvesta kui:",
   "GN_TP_10":"Hash:",
   "GN_GENERAL":"Üldine",
   "GN_TRANSFER":"Edastus",
   "GN_XCONN":"%d/%d ühendatud (sülemis %d)",
   "MAIN_TITLEBAR_SPEED":"A:%s Ü:%s - %s",
   "MENU_COPY":"Kopeeri",
   "MENU_RESET":"Taasta",
   "MENU_UNLIMITED":"Piiramatu",
   "MP_RESOLVE_IPS":"Lahenda IPd",
   "MF_GETFILE":"Get File(s)",
   "MF_DONT":"Ära lae alla",
   "MF_HIGH":"Kõrge prioriteet",
   "MF_LOW":"Madal prioriteet",
   "MF_NORMAL":"Normaalne prioriteet",
   "ML_COPY_MAGNETURI":"Kopeeri Magneti URI",
   "ML_DELETE_DATA":"Kustuta andmed",
   "ML_DELETE_TORRENT":"Kustuta .torrent",
   "ML_DELETE_DATATORRENT":"Kustuta .torrent + andmed",
   "ML_FORCE_RECHECK":"Sunni uuestikontrolli",
   "ML_FORCE_START":"Sunni käivituma",
   "ML_LABEL":"Silt",
   "ML_PAUSE":"Peata",
   "ML_PROPERTIES":"Omadused",
   "ML_QUEUEDOWN":"Liiguta järjekorras alla",
   "ML_QUEUEUP":"Liiguta järjekorras üles",
   "ML_REMOVE":"Eemalda",
   "ML_REMOVE_AND":"Eemalda ja",
   "ML_START":"Käivita",
   "ML_STOP":"Seiska",
   "OV_CAT_ACTIVE":"Aktiivsed",
   "OV_CAT_ALL":"Kõik",
   "OV_CAT_COMPL":"Lõpetatud",
   "OV_CAT_DL":"Alla laadimas",
   "OV_CAT_INACTIVE":"Passiivne",
   "OV_CAT_NOLABEL":"Ilma sildita",
   "OV_COL_AVAIL":"||Saadavus||Saadavus",
   "OV_COL_DATE_ADDED":"Lisatud",
   "OV_COL_DATE_COMPLETED":"Lõpetanud",
   "OV_COL_DONE":"Valmis",
   "OV_COL_DOWNLOADED":"Alla laaditud",
   "OV_COL_DOWNSPD":"Alla kiirus",
   "OV_COL_ETA":"Aega jäänud",
   "OV_COL_LABEL":"Silt",
   "OV_COL_NAME":"Nimi",
   "OV_COL_ORDER":"Nr.",
   "OV_COL_PEERS":"Peerid",
   "OV_COL_REMAINING":"Jäänud",
   "OV_COL_SEEDS":"Seemned",
   "OV_COL_SEEDS_PEERS":"Seemneid/peere",
   "OV_COL_SHARED":"Suhe",
   "OV_COL_SIZE":"Suurus",
   "OV_COL_SOURCE_URL":"Allika URL",
   "OV_COL_STATUS":"Olek",
   "OV_COL_UPPED":"Üles laaditud",
   "OV_COL_UPSPD":"Üles kiirus",
   "OV_CONFIRM_DELETEDATA_MULTIPLE":"Oled kindel, et tahad eemaldada %d valitud torrentit ja kõik nendega seotud andmed?",
   "OV_CONFIRM_DELETEDATA_ONE":"Oled kindel, et tahad eemaldada valitud torrenti ja kõik sellega seotud andmed?",
   "OV_CONFIRM_DELETE_MULTIPLE":"Oled kindel, et tahad eemaldada %d valitud torrentit?",
   "OV_CONFIRM_DELETE_ONE":"Oled kindel, et tahad eemaldada valitud torrenti?",
   "OV_CONFIRM_DELETE_RSSFILTER":"Päriselt kustutada RSS-i filter \"%s\"?",
   "OV_FL_CHECKED":"Kontrollitud %:.1d%",
   "OV_FL_DOWNLOADING":"Laadin alla",
   "OV_FL_ERROR":"Viga: %s",
   "OV_FL_FINISHED":"Lõpetatud",
   "OV_FL_PAUSED":"Peatatud",
   "OV_FL_QUEUED":"Järjekorras",
   "OV_FL_QUEUED_SEED":"Järjekorras seeme",
   "OV_FL_SEEDING":"Lõpetatud",
   "OV_FL_STOPPED":"Seisatud",
   "OV_NEWLABEL_CAPTION":"Sisesta silt",
   "OV_NEWLABEL_TEXT":"Sisesta uus silt valitud torrentitele:",
   "OV_NEW_LABEL":"Uus silt...",
   "OV_REMOVE_LABEL":"Eemalda silt",
   "OV_TABS":"Üldine||Jälitajad||Peerid||Tükid||Failid||Kiirus||Logija||",
   "OV_TB_ADDTORR":"Lisa torrent",
   "OV_TB_ADDURL":"Lisa torrent URList",
   "OV_TB_PAUSE":"Peata",
   "OV_TB_PREF":"Eelistused",
   "OV_TB_QUEUEDOWN":"Liiguta järjekorras alla",
   "OV_TB_QUEUEUP":"Liiguta järjekorras üles",
   "OV_TB_REMOVE":"Eemalda",
   "OV_TB_RSSDOWNLDR":"RSS-i laadija",
   "OV_TB_START":"Käivita",
   "OV_TB_STOP":"Seiska",
   "MM_FILE":"Fail",
   "MM_FILE_ADD_TORRENT":"Lisa torrent...",
   "MM_FILE_ADD_URL":"Lisa torrent URL-ist...",
   "MM_OPTIONS":"Valikud",
   "MM_OPTIONS_PREFERENCES":"Eelistused",
   "MM_OPTIONS_SHOW_CATEGORY":"Näita kategooriate nimekirja",
   "MM_OPTIONS_SHOW_DETAIL":"Näita detailset infot",
   "MM_OPTIONS_SHOW_STATUS":"Näita olekuriba",
   "MM_OPTIONS_SHOW_TOOLBAR":"Näita tööriistariba",
   "MM_OPTIONS_TAB_ICONS":"Ikoonid vahelehtedel",
   "MM_HELP":"Abi",
   "MM_HELP_UT_WEBPAGE":"µTorrenti koduleht",
   "MM_HELP_UT_FORUMS":"µTorrenti foorum",
   "MM_HELP_WEBUI_FEEDBACK":"Send WebUI Feedback",
   "MM_HELP_ABOUT_WEBUI":"About µTorrent WebUI",
   "STM_TORRENTS":"Torrentid",
   "STM_TORRENTS_PAUSEALL":"Peata kõik torrentid",
   "STM_TORRENTS_RESUMEALL":"Jätka kõiki torrenteid",
   "SB_DOWNLOAD":"A: %s%z/s",
   "SB_LOCAL":" P: %z/s",
   "SB_OVERHEAD":" Ü: %z/s",
   "SB_TOTAL":" L: %Z",
   "SB_UPLOAD":"Ü: %s%z/s",
   "SIZE_B":"B",
   "SIZE_EB":"EB",
   "SIZE_GB":"GB",
   "SIZE_KB":"kB",
   "SIZE_MB":"MB",
   "SIZE_PB":"PB",
   "SIZE_TB":"TB",
   "ST_CAPT_ADVANCED":"Täpsem",
   "ST_CAPT_BANDWIDTH":"Võrgukoormus",
   "ST_CAPT_CONNECTION":"Ühendus",
   "ST_CAPT_DISK_CACHE":"Ketta vahemälu",
   "ST_CAPT_FOLDER":"Kataloogid",
   "ST_CAPT_GENERAL":"Üldine",
   "ST_CAPT_SCHEDULER":"Planeerija",
   "ST_CAPT_QUEUEING":"Järjekord",
   "ST_CAPT_UI_EXTRAS":"Kasutajaliides",
   "ST_CAPT_UI_SETTINGS":"Kasutajaliides",
   "ST_CAPT_BITTORRENT":"BitTorrent",
   "ST_CAPT_WEBUI":"Veebiliides",
   "ST_CAPT_TRANSFER_CAP":"Mahupiirang",
   "ST_CAPT_RUN_PROGRAM":"Käivita programm",
   "ST_CBO_UI_DBLCLK_TOR":"Näita omadusi||Käivita/seiska||Ava kaust||Näita allalaadimisriba||",
   "ST_CBO_ENCRYPTIONS":"Keelatud||Lubatud||Sunnitud||",
   "ST_CBO_PROXY":"(pole)||Socks4||Socks5||HTTPS||HTTP||",
   "ST_CBO_TCAP_MODES":"Üleslaadimised||Allalaadimised||Üleslaadimised + allalaadimised||",
   "ST_CBO_TCAP_UNITS":"MB||GB||",
   "ST_CBO_TCAP_PERIODS":"1||2||5||7||10||14||15||20||21||28||30||31||",
   "ST_COL_NAME":"Nimi",
   "ST_COL_VALUE":"Väärtus",
   "ST_SCH_DAYCODES":"E||T||K||N||R||L||P||",
   "ST_SCH_DAYNAMES":"Esmaspäev||Teisipäev||Kolmapäev||Neljapäev||Reede||Laupäev||Pühapäev||",
   "ST_SCH_LGND_FULL":"Täiskiirusel",
   "ST_SCH_LGND_FULLEX":"Täiskiirus - Kasutab üldiseid ühenduse limiite",
   "ST_SCH_LGND_LIMITED":"Piiratud",
   "ST_SCH_LGND_LIMITEDEX":"Piiratud - Kasutab planeerija poolt määratud limiite",
   "ST_SCH_LGND_SEEDING":"Ainult jagamine",
   "ST_SCH_LGND_SEEDINGEX":"Ainult jagamine - Ainult laadib üles (k.a. lõpetamata)",
   "ST_SCH_LGND_OFF":"Väljas",
   "ST_SCH_LGND_OFFEX":"Lülita välja - Peatab kõik torrentid mis pole sunnitud",
   "ST_SEEDTIMES_HOURS":"<= %d tundi",
   "ST_SEEDTIMES_IGNORE":"(ignoreeri)",
   "ST_SEEDTIMES_MINUTES":"<= %d minutit",
   "TIME_DAYS_HOURS":"%dp %dt",
   "TIME_HOURS_MINS":"%dt %dm",
   "TIME_MINS_SECS":"%dm %ds",
   "TIME_SECS":"%ds",
   "TIME_WEEKS_DAYS":"%dn %dp",
   "TIME_YEARS_WEEKS":"%da %dn",
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
   "DLG_SETTINGS_D_REMOTE_02":"BitTorrent Remote pakub lihtsat ja väga turvalist moodust brauseri kaudu enda kliendile ligipääsu.",
   "DLG_SETTINGS_D_REMOTE_03":"Lihtsalt luba ühendus, vali arvuti nimi ja parool ning jäta see arvuti tööle.",
   "DLG_SETTINGS_D_REMOTE_04":"Vaata veel",
   "DLG_SETTINGS_D_REMOTE_05":"Luba BitTorrent Remote ligipääs",
   "DLG_SETTINGS_D_REMOTE_06":"Autentimine",
   "DLG_SETTINGS_D_REMOTE_07":"Kasutajanimi:",
   "DLG_SETTINGS_D_REMOTE_08":"Parool:",
   "DLG_SETTINGS_D_REMOTE_09":"Saada",
   "ST_CAPT_REMOTE":"BitTorrent Remote"
}