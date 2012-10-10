/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = [
	  "Datoteke torrent||*.torrent||Vse datoteke (*.*)||*.*||"
	, "V redu"
	, "Prekliči"
	, "Uporabi"
	, "Da"
	, "Ne"
	, "Zapri"
	, "Nastavitve"
	, "Jezik"
	, "Jezik:"
	, "Zasebnost"
	, "Samodejno preverjaj posodobitve"
	, "Posodobi v razvojne (beta) verzije"
	, "Ko preverjam za posodobitve, pošiljam informacije anonimno"
	, "Ko prenašam"
	, "Pripni končnico .!ut nedokončanim datotekam"
	, "Vnaprej zasedi prostor na disku"
	, "Prepreči stanje pripravljenosti, če so torrenti še dejavni"
	, "Možnosti prikaza"
	, "Zahtevaj potrditev, ko brišem torrente"
	, "Zahtevaj potrditev, ko brišem sledilnike"
	, "Zahtevaj potrditev izhoda"
	, "Izmenjujoča barva ozadja seznama"
	, "Prikaži trenutno hitrost v naslovni vrstici"
	, "Prikaži omejitve v statusni vrstici"
	, "Ob dodajanju torrentov"
	, "Ne začni prenosa samodejno"
	, "Aktiviraj okno programa"
	, "Pokaži okno s seznamom datotek v torrentu"
	, "Odzivi na dvojni klik"
	, "Za torrente, ki se sejejo:"
	, "Za torrente ki se prenašajo:"
	, "Mesto sprejetih datotek"
	, "Shrani nove datoteke v:"
	, "Prikaži pog. okno ob ročnem dodajanju"
	, "Premakni končane prenose v:"
	, "Dodaj oznako torrenta"
	, "Premakni le iz privzete mape za prenose"
	, "Mesto .torrent datotek"
	, "Shrani .torrente v:"
	, "Ob koncu prejema premakni .torrent v:"
	, "Samodejno naloži .torrente v mapi:"
	, "Zbriši naložene .torrente"
	, "Vrata za komunikacijo"
	, "Vrata za prihajajoče povezave:"
	, "Naključna vrata"
	, "Naključna vrata ob vsakem zagonu"
	, "Omogoči UPnP preslikovanje vrat"
	, "Omogoči NAT-PMP preslikovanje vrat"
	, "Proxy strežnik"
	, "Tip:"
	, "Proxy:"
	, "Vrata"
	, "Avtentikacija"
	, "Uporabniško ime:"
	, "Geslo:"
	, "Razreši naslove gostiteljev skozi posredovalnik"
	, "Uporabi proxy strežnik za povezave med soležniki"
	, "Dodaj izjeme Požarnega zidu programa Windows"
	, "Zasebnost posredovalnika"
	, "Onemogoči vse poizvedbe lokalnega domenskega strežnika (DNS)"
	, "Onemogoči funkcije, ki omogočajo uhajanja pod. za ugotavljanje istovetnosti"
	, "Onemogoči nepodprte povezave posredovalnika"
	, "Globalno omejevanje pasovne širine"
	, "Največja hitrost oddajanja (kB/s): [0: neomejeno]"
	, "Avtomatična"
	, "Alternativna hitrost oddajanja, ko ne prejemam (kB/s):"
	, "Globalno omejevanje hitrosti prejemanja"
	, "Največja hitrost prejemanja (kB/s): [0: neomejeno]"
	, "Število povezav"
	, "Največje skupno število povezav:"
	, "Največje število povezav s soležniki na torrent:"
	, "Število oddajnih povezav na torrent:"
	, "Oddajaj večim, če je hitrost oddajanja < 90%"
	, "Global Rate Limit Options"
	, "Uporabi omejitev hitrosti za presežek transporta"
	, "Uporabi omejitev hitrosti za uTP povezave"
	, "Splošne posebnosti BitTorrenta"
	, "Omogoči omrežje DHT"
	, "Vprašaj sledilnik po povzetkih"
	, "Omogoči DHT za nove torrente"
	, "Omogoči izmenjavo soležnikov"
	, "Omogoči odkrivanje lokalnih soležnikov"
	, "Omeji pasovno širino lokalnih prenosov"
	, "IP/ime gostitelja za oddajo sledilniku:"
	, "Šifriranje protokola"
	, "Izhodne:"
	, "Dovoli dohodne nešifrirane povezave"
	, "Omogoči upravljanje pasovne širine [uTP]"
	, "Omogoči podporo UDP sledilnika"
	, "Omogoči Omejitev prenosov"
	, "Nastavitve omejitev"
	, "Tip omejitve:"
	, "Omejitev Pasovne širine:"
	, "Časovno obdobje (dni):"
	, "Zgodovina uporabe za izbrano obdobje:"
	, "Oddano:"
	, "Prejeto:"
	, "Oddano + prejeto:"
	, "Časovno obdobje:"
	, "Zadnjih %d dni"
	, "Počisti zgod."
	, "Nastavitve čakalne vrste"
	, "Največje število dejavnih torrentov (sprejemanje ali oddajanje):"
	, "Največje število dejavnih prejemanj:"
	, "Oddajaj, dokler [privzete nastavitve]"
	, "Minimalni delilnik (%):"
	, "Minimalni čas sejanja (v minutah):"
	, "Oddajanje ima prednost pred prejemanjem"
	, "Ko µTorrent doseže cilj sejanja"
	, "meji hitrost oddajanja na: (kB/s): [0: ustavi]"
	, "Vklopi urnik"
	, "Tabela urnika"
	, "Nastavitve urnika"
	, "Omeji hitrost oddajanja (kB/s):"
	, "Omeji hitrost prejemanja (kB/s):"
	, "Onemogoči DHT ob ugašanju"
	, "Omogoči spletni UV"
	, "Avtentikacija"
	, "Uporabniško ime:"
	, "Geslo:"
	, "Omogoči gosta z uporabniškim imenom:"
	, "Povezljivost"
	, "Alternativna vrata za vmesnik (privzeta so vrata za povezavo):"
	, "Omeji dostop do naslednjih IP-jev (ločite vnose z vejico):"
	, "Napredne možnosti [POZOR: Ne spreminjajte!]"
	, "Nastavi:"
	, "Vklop"
	, "Izklop"
	, "Nastavi"
	, "Seznam omejitev hitrosti [ločite različne vrednosti z vejico]"
	, "Povozi privzeti seznam s hitrostmi"
	, "Seznam oddajanja:"
	, "Seznam prejemanja:"
	, "Stalne oznake [ločite več oznak z znakom | ]"
	, "Iskalniki [oblika: ime|URL]"
	, "Osnovne nastavitve predpomnilnika"
	, "Diskovni predpomnilnik se uporablja za hranjenje pogosto uporabljenih podatkov v pomnilniku, saj se tako zmanjša število branj in pisanj na disk. S temi nastavitvami lahko vplivate na samodejno upravljanje predpomnilnika, ki ga izvaja µTorrent."
	, "Povozi privzeto velikost predpomnilnika in določite velikost ročno (MB):"
	, "Zmanjšaj uporabo pomnilnika, ko predpomnilnik ni potreben"
	, "Napredne nastavitve predpomnilnika"
	, "Omogoči predpomnjenje pisanja na disk"
	, "Zapiši nedotaknjene bloke vsaki 2 minuti"
	, "Takoj zapiši dokončane kose"
	, "Omogoči predpomnjenje branja iz diska"
	, "Izklopi predpomnjenje pisanja ko je hitrost oddajanja nizka"
	, "Odstrani stare bloke iz predpomnilnika"
	, "Ob 'thrashingu' predpomnilnika povečaj samodejno velikost predpomnilnika"
	, "Onemogoči Windows predpomnjenje pisanja na disk"
	, "Onemogoči Windows predpomnjenje branja iz diska"
	, "Zaženi program"
	, "Zaženi ta program, ko se konča torrent:"
	, "Zaženi ta program, ko torrent spremeni stanje:"
	, "Ukazi, ki so na voljo:\r\n%F - Ime datoteke (če je v torrentu prisotna le ena)\r\n%D - Mapa, kjer so shranjene datoteke\r\n%N - Naslov torrenta\r\n%S - Stanje torrenta\r\n%L - Oznaka\r\n%T - Sledilnik\r\n%M - Niz sporočila stanja (isto kot stolpec stanje)\r\n%I - Hex kodirano info-zgoščevanje\r\n\r\nStanje je kombinacija med:\r\nzačet = 1, v-preverjanju = 2, začet-po-preverjanju = 4,\r\npreverjen = 8, napaka = 16, v-premoru = 32, samodejno = 64, naložen = 128"
	, "Lastnosti torrenta"
	, "Sledilniki (loči jih s prazno vrstico)"
	, "Nastavitve pasovne širine"
	, "Največja hitrost oddajanja (kB/s): [privzeto 0]"
	, "Največja hitrost prejemanja (kB/s): [privzeto 0]"
	, "Število sejalnih mest: [privzeto 0]"
	, "Sejaj, dokler je"
	, "Povozi privzete nastavitve"
	, "Minimalni delilnik (%):"
	, "Minimalni čas sejanja (v minutah):"
	, "Druge nastavitve"
	, "Začetno oddajanje"
	, "Vklopi DHT"
	, "Izmenjava soležnikov"
	, "Vir"
	, "URL vira:"
	, "Ime po meri:"
	, "Naročnina"
	, "Ne prenašaj vseh vnosov samodejno"
	, "Samodejno prenesi vse vnose objavljene v viru"
	, "Uporabi pameten filter za epizode"
	, "Viri||Priljubljeni||Zgodovina||"
	, "All Feeds"
	, "Nastavitve filtra"
	, "Ime:"
	, "Filter:"
	, "Brez:"
	, "Shrani v:"
	, "Vir:"
	, "Kvaliteta:"
	, "Št. nadaljevanja: [npr. 1x12-14]"
	, "Filter se namesto z očiščenim ujema z izvornim imenom"
	, "Ne začeti prenosov samodejno"
	, "Pameten filter"
	, "Prenosu daj najvišjo prednost"
	, "Najmanjši interval:"
	, "Oznaka novih torrentov:"
	, "Dodaj vir RSS …"
	, "Uredi vir …"
	, "Onemogoči vir"
	, "Omogoči vir"
	, "Posodobi vir"
	, "Zbriši vir"
	, "Prejemanje"
	, "Odpri URL v brskalniku"
	, "Dodaj med priljubljene"
	, "Dodaj"
	, "Izbriši"
	, "VSE"
	, "(Vse)"
	, "(vsako ujemanje)||(samo eno ujemanje)||12 ur||1 dan||2 dneva||3 dnevi||4 dnevi||1 teden||2 tedna||3 tedni||1 mesec||"
	, "Dodaj naročnino RSS"
	, "Uredi RSS vir"
	, "Remove RSS Feed(s)"
	, "Really delete the %d selected RSS Feeds?"
	, "Res zbrišem vir RSS \"%s\"?"
	, "Celo ime"
	, "Ime"
	, "Nadaljevanje"
	, "Oblika"
	, "Kodek"
	, "Date"
	, "Vir"
	, "Izvorni URL"
	, "IP"
	, "Vrata"
	, "Klient"
	, "Zastavice"
	, "%"
	, "Pomembnost"
	, "Prejemanje"
	, "Oddajanje"
	, "Zahtevki"
	, "Čakalna doba"
	, "Oddano"
	, "Prejeto"
	, "Napaka izvlečka"
	, "Solež. pr."
	, "Največja hitrost oddajanja"
	, "Največja hitrost prejemanja"
	, "Čakam"
	, "Nedejavni"
	, "Opravljeno"
	, "Prvi kos"
	, "Ime"
	, "Št. kosov"
	, "Odst."
	, "Prednost"
	, "Velikost"
	, "preskoči"
	, "nizka"
	, "običajna"
	, "visoka"
	, "Prejeto:"
	, "Oddano:"
	, "Semena:"
	, "Ostaja:"
	, "Hitrost prejemanja:"
	, "Hitrost oddajanja:"
	, "Odjemalci:"
	, "Delilno razmerje:"
	, "Shrani kot:"
	, "Izvleček:"
	, "Splošno"
	, "Prenos"
	, "%d od %d povezanih (%d v roju)"
	, "P:%s O:%s - %s"
	, "Kopiraj"
	, "Ponastavi"
	, "Neomejeno"
	, "Razreši naslove IP"
	, "Get File(s)"
	, "Ne prenesi"
	, "Visoka prednost"
	, "Nizka prednost"
	, "Običajna prednost"
	, "Kopiraj magnetni URI"
	, "Zbriši podatke"
	, "Zbriši .torrent"
	, "Zbriši .torrent + podatke"
	, "Vsili preverbo"
	, "Vsili začetek"
	, "Oznaka"
	, "Premor"
	, "Lastnosti"
	, "Premakni dol v vrsti"
	, "Premakni gor v vrsti"
	, "Odstrani"
	, "Odstrani in"
	, "Začni"
	, "Prenehaj"
	, "Dejavni"
	, "Vsi"
	, "Dokončani"
	, "Nedokončani"
	, "Nedejavni"
	, "Brez oznake"
	, "||Razp.||Razpoložljivost"
	, "Dodan na"
	, "Dokončan na"
	, "Opravljeno"
	, "Prejeto"
	, "Prejemanje"
	, "Čas"
	, "Oznaka"
	, "Ime"
	, "Št."
	, "Soležniki"
	, "Ostaja"
	, "Semena"
	, "Semena/soležniki"
	, "Delilnik"
	, "Velikost"
	, "Izvorni URL"
	, "Stanje"
	, "Oddano"
	, "Oddajanje"
	, "Ali ste prepričani, da želite odstraniti %d izbranih torrentov in vse pridružene podatke?"
	, "Ali ste prepričani, da želite odstraniti izbrani torrent in vse pridružene podatke?"
	, "Ali ste prepričani, da želite odstraniti %d izbranih torrentov?"
	, "Ali ste prepričani, da želite odstraniti izbrani torrent?"
	, "Res zbrišem filter za RSS \"%s\"?"
	, "Preveril %:.1d%%"
	, "Prejemanje"
	, "Napaka: %s"
	, "Dokončano"
	, "Premor"
	, "Čakam"
	, "Čakam sejanje"
	, "Oddajanje"
	, "Ustavljen"
	, "Vnesite oznako"
	, "Vnesite novo oznako za izbrane torrente:"
	, "Nova oznaka …"
	, "Odstrani oznako"
	, "Splošno||Sledilniki||Soležniki||Kosi||Datoteke||Hitrost||Dnevnik||"
	, "Dodaj torrent"
	, "Dodaj torrent iz URL naslova"
	, "Premor"
	, "Nastavitve"
	, "Premakni dol v vrsti"
	, "Premakni gor v vrsti"
	, "Odstrani"
	, "Prejemnik RSS"
	, "Začni"
	, "Ustavi"
	, "Datoteka"
	, "Dodaj torrent …"
	, "Dodaj torrent preko URL-ja …"
	, "Možnosti"
	, "Nastavitve"
	, "Pokaži seznam kategorij"
	, "Pokaži podrobnosti"
	, "Pokaži vrstico stanja"
	, "Pokaži orodno vrstico"
	, "Ikone na zavihkih"
	, "Pomoč"
	, "Spletna stran µTorrent-a"
	, "Forum µTorrent-a"
	, "Send WebUI Feedback"
	, "About µTorrent WebUI"
	, "Torrenti"
	, "Premor vseh torrentov"
	, "Vzpostavi vse torrente"
	, "P: %s%z/s"
	, " L: %z/s"
	, " P: %z/s"
	, " S: %Z"
	, "O: %s%z/s"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "Napredno"
	, "Pasovna širina"
	, "Povezava"
	, "Medpomnilnik diska"
	, "Imeniki"
	, "Splošno"
	, "Urnik"
	, "Čakalna vrsta"
	, "Drugo o vmesniku"
	, "Nastavitve vmesnika"
	, "BitTorrent"
	, "Spletni vmesnik"
	, "Omejitev prenosov"
	, "Zaženi program"
	, "Pokaži lastnosti||Ustavi/Poženi||Odpri mapo||Prikazi vrstico stanja prenosa||"
	, "Izklopljeno||Vklopljeno||Vsiljeno||"
	, "(prazno)||Socks4||Socks5||HTTPS||HTTP||"
	, "oddano||prejeto||oddano + prejeto||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "Ime"
	, "Vrednost"
	, "Pon||Tor||Sre||Čet||Pet||Sob||Ned||"
	, "Ponedeljek||Torek||Sreda||Četrtek||Petek||Sobota||Nedelja||"
	, "Polna hitrost"
	, "Polna hitrost - Uporabi normalno globalne omejitve pasovne širine"
	, "Omejena"
	, "Omejena - Uporabi omejitve pasovne širine po urniku"
	, "Samo oddajanje"
	, "Samo oddajanje - Samo naloži podatke (tudi nedokončane)"
	, "Izklop"
	, "Izklop - Ustavi vse torrente ki niso vsiljeni"
	, "<= %d ur"
	, "(Prezri)"
	, "<= %d minut"
	, "%dd %dh"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dt %dd"
	, "%dl %dt"
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	"BitTorrent daljinski upravljalec",
	"BitTorrent daljinski upravljalec zagotavlja enostaven in zelo varen način za dostopanje do vašega odjemalca prek brskalnika.",
	"Samo omogočite spodnjo povezavo, izberite ime računalnika in geslo in ne pozabite pustiti priklopljenega računalnika.",
	"Naučite se več",
	"Omogoči dostop do BitTorrent daljinskega upravljalca",
	"Vpisovanje",
	"Uporabniško ime:",
	"Geslo:",
	"Pošlji",
	"BitTorrent daljinski upravljalec"
];
