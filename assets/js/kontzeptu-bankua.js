/* Lau Kontzeptuen Erronka - kontzeptu-bankua.
   Iturria: Historia_BTX2_Unikopia_APunteak.pdf dokumentuko kontzeptu-hiztegiak.

   Irizpide pedagogikoa:
   - Banku honek kontzeptu historiko, politiko, sozial, ekonomiko eta instituzionalak lehenesten ditu.
   - Ez dira hautagai gisa sartu pertsona-izenak, alderdi/sigla/erakunde propio hutsak, ezta tratatu edo gertaera datatu hutsak ere.
   - Karlistadak bezalako prozesu-gatazkak mantendu dira, kontzeptu gisa lantzen direlako.
   - Prozesu eta inflexio-gune esanguratsuak (Independentzia Gerra, Cadizko Gorteak, Sexenio Demokratikoa, Kolonien galera...) kontzeptu gisa sartu dira, gertaera huts gisa baino gehiago lantzen direlako; Moncloa, Konkordatua edo antzeko tratatu/sigla zehatzak, ordea, kanpoan.
*/
(function () {
  "use strict";

  var TOPIC_META = {
    "Antzinako Erregimenaren krisia": { garaia: "XVIII. mendearen amaiera - XIX. mendea", ordena: 1808 },
    "Berrezarkuntza": { garaia: "1875-1930", ordena: 1875 },
    "Euskal industrializazioa": { garaia: "1875-1930", ordena: 1880 },
    "II. Errepublika": { garaia: "1931-1936", ordena: 1931 },
    "Gerra Zibila": { garaia: "1936-1939", ordena: 1936 },
    "Frankismoa I": { garaia: "1939-1959", ordena: 1939 },
    "Frankismoa II": { garaia: "1959-1975", ordena: 1959 },
    "Trantsizioa": { garaia: "1975-1982", ordena: 1975 },
    "Monarkia parlamentarioa": { garaia: "1982-1996", ordena: 1982 }
  };

  /* k = kontzeptua, t = PDFeko gaia(k), d = definizio laburra. */
  var RAW_CONCEPTS = [
    { k: "Abertzaletasuna/Nazionalismoa", t: ["Antzinako Erregimenaren krisia", "Euskal industrializazioa"], d: "Nazio baten nortasuna, kultura eta autodeterminazio eskubidea aldarrikatzen dituen ideologia politikoa." },
    { k: "Antzinako Erregimena", t: ["Antzinako Erregimenaren krisia"], d: "Gizarte estamentala, monarkia absolutua eta nekazaritza-oinarriko ekonomia nagusi zituen sistema historikoa." },
    { k: "Batzar Nagusiak", t: ["Antzinako Erregimenaren krisia"], d: "Euskal lurraldeetako foru-erakunde historikoak, tokiko erabakigune eta legegile nagusi gisa jarduten zutenak." },
    { k: "Desamortizazioa", t: ["Antzinako Erregimenaren krisia"], d: "Estatuak Elizaren edo herri-erakundeen ondasunak saldu zituen prozesua, jabetza pribatua eta ogasun publikoa indartzeko." },
    { k: "Diputazioak", t: ["Antzinako Erregimenaren krisia", "Euskal industrializazioa"], d: "Probintzia mailako gobernu-erakundeak, XIX. mendean lurralde-administrazioaren eta zerga-kudeaketaren pieza nagusiak." },
    { k: "Errejentzia", t: ["Antzinako Erregimenaren krisia"], d: "Erregea adingabea edo absentzia egoeran dagoenean, haren izenean gobernatzen duen behin-behineko agintea." },
    { k: "Errepublika", t: ["Antzinako Erregimenaren krisia", "Berrezarkuntza", "II. Errepublika"], d: "Estatuburua erregea ez den eta boterea herritarren ordezkaritzaren bidez antolatzen duen estatu-forma." },
    { k: "Estatu zentralista", t: ["Antzinako Erregimenaren krisia"], d: "Boterea erdigune politikoan biltzen duen estatu-eredua, probintzia edo lurraldeen autonomia politikoa mugatuz." },
    { k: "Frantsestuak", t: ["Antzinako Erregimenaren krisia"], d: "Frantziar eragin politiko eta ilustratuaren alde egin zuten espainiar funtzionario eta intelektualen sektorea." },
    { k: "Moderantismoa", t: ["Antzinako Erregimenaren krisia"], d: "Liberalismoaren adar kontserbadorea, subiranotasun partekatua, ordena soziala eta sufragio mugatua defendatzen zituena." },
    { k: "Nazio-kontzientzia", t: ["Antzinako Erregimenaren krisia", "Euskal industrializazioa"], d: "Lurralde batek bere nortasun politiko eta kulturala modu kolektiboan sentitzea eta adieraztea." },
    { k: "Proletariotza", t: ["Antzinako Erregimenaren krisia", "Berrezarkuntza", "Euskal industrializazioa"], d: "Industrializazioarekin sortutako soldatapeko langile klasea, ekoizpen-bideen jabetzarik ez duena.", a: ["proletalgoa", "langile klasea"] },
    { k: "Subiranotasun nazionala", t: ["Antzinako Erregimenaren krisia"], d: "Botere politikoaren azken iturria nazioan edo herrian dagoela dioen printzipio liberala." },
    { k: "Subiranotasun partekatua", t: ["Antzinako Erregimenaren krisia", "Berrezarkuntza"], d: "Botere politikoa erregearen eta Gorteen artean banatzen dela dioen printzipio konstituzional moderatua." },
    { k: "Sufragio unibertsala", t: ["Antzinako Erregimenaren krisia", "II. Errepublika"], d: "Herritar helduei boto eskubidea aitortzen dien sistema, errenta, jabetza edo sexuaren araberako muga politikoak gaindituz." },
    { k: "Foruak", t: ["Antzinako Erregimenaren krisia", "Euskal industrializazioa"], d: "Euskal lurraldeetako lege, ohitura eta erakunde historiko propioen multzoa, autogobernuarekin eta zerga-berezitasunekin lotua.", a: ["foru sistema", "foruen sistema"] },
    { k: "Gobernadore zibilak", t: ["Antzinako Erregimenaren krisia"], d: "Estatu zentralaren ordezkariak probintzietan, administrazioa, ordena publikoa eta gobernuaren aginduak betearazteko." },
    { k: "Habeas corpus", t: ["Antzinako Erregimenaren krisia"], d: "Pertsonen askatasuna eta segurtasuna babesteko printzipio juridikoa, atxiloketa arbitrarioak mugatzen dituena." },
    { k: "Ilustrazioa", t: ["Antzinako Erregimenaren krisia"], d: "Arrazoia, hezkuntza, askatasuna eta erreforma politiko-soziala defendatu zituen XVIII. mendeko mugimendu intelektuala." },
    { k: "Karlistadak", t: ["Antzinako Erregimenaren krisia", "Euskal industrializazioa"], d: "XIX. mendeko gatazka-prozesuak, absolutismoaren, liberalismoaren, dinastia-legitimismoaren eta foruen auziaren arteko talkarekin lotuak." },
    { k: "Konstituzioa", t: ["Antzinako Erregimenaren krisia", "II. Errepublika", "Trantsizioa"], d: "Estatuaren oinarrizko legea, erakundeen antolaketa, botereen banaketa, eskubideak eta lurralde-eredua jasotzen dituena." },
    { k: "Kontzertu Ekonomikoa", t: ["Antzinako Erregimenaren krisia", "Euskal industrializazioa", "Monarkia parlamentarioa"], d: "Euskal lurraldeei zerga-bilketa eta kupoaren bidezko finantza-harreman berezia aitortzen dien sistema.", a: ["kupo", "zerga autonomia"] },
    { k: "Liberalismoa", t: ["Antzinako Erregimenaren krisia", "Berrezarkuntza"], d: "Subiranotasun nazionala, eskubide zibilak, konstituzioa, legearen aurreko berdintasuna eta ekonomia askearen defentsan oinarritutako ideologia." },
    { k: "Sufragio zentsitarioa", t: ["Antzinako Erregimenaren krisia", "Berrezarkuntza"], d: "Botoa emateko errenta edo jabetza baldintzak ezartzen dituen hauteskunde-sistema mugatua." },
    { k: "Zentralismoa", t: ["Antzinako Erregimenaren krisia", "Frankismoa I"], d: "Boterea eta erabaki politiko-administratibo nagusiak estatuaren erdigunean pilatzeko joera." },

    { k: "Anarkismoa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Estatuaren eta autoritate hierarkikoaren aurkako ideologia, askatasun indibiduala eta autogestioa defendatzen dituena." },
    { k: "Antiklerikalismoa", t: ["Berrezarkuntza", "II. Errepublika"], d: "Elizaren botere politiko, sozial edo ekonomikoaren aurkako jarrera, batez ere hezkuntzaren eta estatuaren laikotasunaren inguruan." },
    { k: "Autarkia", t: ["Frankismoa I", "Frankismoa II"], d: "Kanpoarekiko mendekotasuna murriztu eta ekonomia barrurantz antolatzeko politika ekonomikoa." },
    { k: "Bipartidismoa/turnismoa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Bi alderdi nagusiren arteko botere-txandaketa kontrolatua, Errestaurazioan hauteskunde-iruzurrarekin lotua." },
    { k: "Kazikismoa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Tokiko boteredunek botoak eta hauteskunde-emaitzak kontrolatzeko erabilitako klientelismo politikoaren sistema.", a: ["Caciquismoa", "kazikeak"] },
    { k: "Demokrazia", t: ["Berrezarkuntza", "II. Errepublika"], d: "Herritarren parte-hartze politikoan, hauteskunde libreetan, eskubideetan eta boterearen kontrol instituzionalean oinarritutako sistema." },
    { k: "Defentsa Juntak", t: ["Berrezarkuntza"], d: "Armadaren barruko interes profesionalak defendatzeko sortutako talde militarrak, krisi politikoetan eragin handia izan zutenak." },
    { k: "Emigrazioa", t: ["Berrezarkuntza", "Frankismoa II"], d: "Biztanleek lan edo bizi-baldintza hobeen bila beren lurraldetik kanpora egiten duten mugimendua." },
    { k: "Erregenerazionismoa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Krisi politiko eta moralaren ondoren estatua eta gizartea berritzeko beharra aldarrikatu zuen pentsamendu-korrontea." },
    { k: "Errestaurazioa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "1875etik aurrerako sistema politikoa, monarkia konstituzionala, bipartidismoa eta ordena soziala uztartu zituena." },
    { k: "Federalismoa", t: ["Berrezarkuntza"], d: "Estatua autonomia zabala duten lurralde edo erkidegoen bidez antolatu nahi duen printzipio politikoa." },
    { k: "Hezkuntza nazionala", t: ["Berrezarkuntza", "II. Errepublika"], d: "Estatuak hezkuntza zentralizatu, modernizatu edo laikoago baten bidez herritarrak prestatzeko duen proiektua." },
    { k: "Immigrazioa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Biztanleak kanpotik industria-guneetara etortzea, lan-aukerek eta hazkunde ekonomikoak bultzatuta.", a: ["Inmigrazioa"] },
    { k: "Industrializazioa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Manufaktura eta industria-jarduera zabaltzeko prozesua, langile klasearen sorrera eta auzi soziala ekarri zituena." },
    { k: "Kolonialismoa", t: ["Berrezarkuntza"], d: "Metropoli batek beste lurralde batzuen gainean ezartzen duen dominazio politiko, ekonomiko eta militarra." },
    { k: "Kontserbadurismoa", t: ["Berrezarkuntza"], d: "Tradizioa, ordena soziala, monarkia eta erlijioaren eragina lehenesten dituen ideologia politikoa." },
    { k: "Korporatibismoa", t: ["Berrezarkuntza", "Frankismoa I"], d: "Langileak eta enpresariak egitura berean antolatu nahi dituen eredua, klase-gatazka kontrolatzeko helburuarekin." },
    { k: "Latifundismoa", t: ["Berrezarkuntza", "II. Errepublika"], d: "Lur sail handiak jabe gutxi batzuen esku pilatzen dituen nekazaritza-egitura, auzi sozialaren iturri garrantzitsua." },
    { k: "Militarismoa", t: ["Berrezarkuntza", "II. Errepublika"], d: "Armadak bizitza politikoan esku hartzeko duen joera edo ohitura historikoa." },
    { k: "Monopolioa", t: ["Berrezarkuntza"], d: "Enpresa edo erakunde bakar batek sektore ekonomiko baten gaineko kontrol nagusia lortzen duenean sortzen den egoera." },
    { k: "Nazionalismo periferikoak", t: ["Berrezarkuntza", "Frankismoa II"], d: "Estatu zentralaren aurrean nortasun, hizkuntza, kultura eta autogobernu propioa defendatzen dituzten mugimendu politikoak." },
    { k: "Oposizio politikoa", t: ["Berrezarkuntza"], d: "Sistema politiko nagusiaren aurka antolatzen diren indar, mugimendu eta ideologien multzoa." },
    { k: "Progresismoa", t: ["Berrezarkuntza"], d: "Liberalismoaren adar aurrerakoiagoa, eskubide politiko zabalagoak, hezkuntza laikoa eta erreforma sozialak defendatzen zituena." },
    { k: "Sindikalismoa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Langileen interes ekonomiko eta sozialak defendatzeko erakunde eta borroka-moduen multzoa." },
    { k: "Sozialismoa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Langileen eskubide politiko eta sozialak defendatzen dituen ideologia, esplotazioa murriztu edo gainditu nahi duena." },

    { k: "Akzio zuzena", t: ["Euskal industrializazioa"], d: "Langile-borrokaren ekintza-eredua, grebak, boikotak edo piketeak negoziazio instituzionalaren ordez lehenesten dituena." },
    { k: "Anarkosindikalismoa", t: ["Euskal industrializazioa"], d: "Anarkismoaren adar sindikala, langileen autogestioa, hierarkien ukapena eta borroka sindikala uztartzen dituena." },
    { k: "Arantzela", t: ["Euskal industrializazioa"], d: "Inportazioei ezarritako zerga, barne-industria babesteko eta merkatu nazionala sendotzeko erabilia.", a: ["babes arantzela", "babes-arantzela"] },
    { k: "Auzi soziala", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Industrializazioak eta nekazaritza-egiturek sortutako klase-gatazka, lan-baldintza gogorrak eta desberdintasun sozialak biltzen dituen arazoa." },
    { k: "Auzo proletarioa", t: ["Euskal industrializazioa"], d: "Industria-hirietako langile-familien bizileku-eremua, zerbitzu eskasekin eta antolaketa sozialaren sorleku bihurtua.", a: ["Auzo proletario"] },
    { k: "Batzokia", t: ["Euskal industrializazioa"], d: "Euskal nazionalismoaren kultura eta politika-sozializaziorako egoitza edo elkarte-gunea." },
    { k: "Batzorde Paritarioak", t: ["Euskal industrializazioa", "Berrezarkuntza"], d: "Langile eta enpresarien ordezkariak mahai berean bildu nahi zituzten bitartekaritza korporatiboko organoak." },
    { k: "Encasilladoa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Hauteskundeetako eserlekuak aurrez banatu eta emaitzak kontrolatzeko mekanismo politikoa." },
    { k: "Hidroelektrizitatea", t: ["Euskal industrializazioa"], d: "Ur-energia erabiliz elektrizitatea sortzeko sistema, industria txiki eta ertainen elektrifikazioan garrantzitsua izan zena." },
    { k: "Industria astuna", t: ["Euskal industrializazioa"], d: "Siderurgia, ontzigintza eta tren-materiala bezalako kapital intentsiboko industria-jarduerak biltzen dituen sektorea." },
    { k: "Integrismoa", t: ["Euskal industrializazioa"], d: "Katolizismo politiko zorrotza eta liberalismoaren aurkako jarrera defendatzen dituen korronte tradizionalista." },
    { k: "Karlismoa", t: ["Antzinako Erregimenaren krisia", "Euskal industrializazioa"], d: "Monarkia legitimista, tradizio katolikoa eta foru-defentsa uztartu zituen mugimendu politiko tradizionalista." },
    { k: "Klase proletarioa", t: ["Euskal industrializazioa"], d: "Soldatapeko industria-langileen gizarte-taldea, langile-mugimenduaren oinarri sozial nagusietakoa.", a: ["proletalgoa", "proletariotza", "langile klasea"] },
    { k: "Lockout", t: ["Euskal industrializazioa"], d: "Patronalak lantegia ixteko erabiltzen duen presio-tresna, grebei edo langileen aldarrikapenei erantzuteko." },
    { k: "Mutualitatea", t: ["Euskal industrializazioa"], d: "Langileek laguntza ekonomiko eta sozialerako sortutako elkartea, gaixotasun, istripu edo heriotza kasuetan babesa emateko." },
    { k: "Nazionalismo abertzalea", t: ["Euskal industrializazioa"], d: "Euskal nazioaren defentsa, foruak, hizkuntza, kultura eta autogobernua uztartu zituen ideologia politikoa." },
    { k: "Paternalismo enpresariala", t: ["Euskal industrializazioa"], d: "Enpresek langileei babes sozial mugatua emanez kontrol soziala eta leialtasuna bilatzen zuten jarduera." },
    { k: "Polo industriala", t: ["Euskal industrializazioa"], d: "Industria-jarduera intentsiboa lurralde jakin batean kontzentratzen den eremu ekonomikoa." },
    { k: "Sindikatu bakarra", t: ["Euskal industrializazioa"], d: "Lanbide edo sektore guztiak erakunde sindikal berean biltzeko printzipio antolatzailea." },
    { k: "Triangelu industrial euskalduna", t: ["Euskal industrializazioa"], d: "Euskal lurraldeen industria-eredu osagarriak azaltzeko erabiltzen den kontzeptua, sektore eta lurralde desberdinak lotuz." },
    { k: "Zerrenda beltzak", t: ["Euskal industrializazioa"], d: "Patronalek sindikatu-antolatzaileak edo grebalariak berriz ez kontratatzeko erabiltzen zituzten izen-zerrendak." },
    { k: "Ziklo ekonomikoa", t: ["Euskal industrializazioa", "Monarkia parlamentarioa"], d: "Ekonomiaren hazkunde, krisi, susperraldi eta beheraldi faseak azaltzeko erabiltzen den kontzeptua." },

    { k: "Autonomia", t: ["II. Errepublika", "Gerra Zibila", "Trantsizioa"], d: "Lurralde batek estatuaren barruan erakunde propioak eta autogobernu maila bat izateko duen gaitasuna." },
    { k: "Deszentralizazioa", t: ["II. Errepublika", "Trantsizioa"], d: "Botere politiko eta administratiboaren zati bat estatu zentraletik lurralde-erakundeetara eramateko prozesua." },
    { k: "Erradikalizazioa", t: ["II. Errepublika"], d: "Jarrera politikoak mutur kontrajarrietara eramateko prozesua, akordioaren eta moderazioaren espazioa murriztuz." },
    { k: "Erreforma", t: ["II. Errepublika", "Trantsizioa"], d: "Sistema politiko, sozial edo ekonomiko bat legeen eta erakundeen bidez aldatzeko prozesua." },
    { k: "Erreforma agrarioa", t: ["II. Errepublika"], d: "Lur-jabetzaren banaketa aldatzeko politika, latifundioak mugatu eta nekazarien egoera hobetzeko helburuarekin." },
    { k: "Erreformismoa", t: ["II. Errepublika"], d: "Aldaketa sozial eta politikoak erakunde demokratikoen eta legeen bidez egitearen aldeko jarrera." },
    { k: "Eskubide sozialak", t: ["II. Errepublika", "Monarkia parlamentarioa"], d: "Lana, hezkuntza, osasuna, babes soziala edo pentsioak bezalako bizi-baldintza duinak bermatzeko eskubideak." },
    { k: "Eskubide zibilak", t: ["II. Errepublika", "Trantsizioa"], d: "Adierazpen askatasuna, prentsa askatasuna, elkarte-eskubidea, erlijio askatasuna eta legearen aurreko berdintasuna bezalako askatasunak." },
    { k: "Estatu-kolpea", t: ["II. Errepublika", "Gerra Zibila", "Trantsizioa"], d: "Boterea legez kanpo eta indarrez eskuratzeko saiakera, normalean armadaren edo estatu-aparatuaren sektore baten bidez." },
    { k: "Indarkeria politikoa", t: ["II. Errepublika", "Gerra Zibila", "Trantsizioa"], d: "Helburu politikoak lortzeko, aurkaria beldurtzeko edo prozesu politikoa baldintzatzeko erabiltzen den indarkeria." },
    { k: "Kontrarreforma", t: ["II. Errepublika"], d: "Aurretik egindako erreforma politiko edo sozialak gelditu, mugatu edo desegiteko politika." },
    { k: "Laikotasuna", t: ["II. Errepublika"], d: "Estatua erlijio jakin batekin ez identifikatzeko eta politika publikoa elizaren kontrolpetik bereizteko printzipioa." },
    { k: "Latifundioa", t: ["II. Errepublika"], d: "Lur-eremu oso handia, jabe gutxi batzuen esku egon ohi dena eta nekazarien mendekotasuna areagotzen duena." },
    { k: "Polarizazioa", t: ["II. Errepublika", "Gerra Zibila"], d: "Jarrera politiko eta sozialak mutur kontrajarrietara urruntzeko prozesua, adostasuna zailduz." },
    { k: "Sekularizazioa", t: ["II. Errepublika", "Monarkia parlamentarioa"], d: "Gizartean, erakundeetan eta eguneroko bizitzan erlijioaren eragina murrizteko prozesua." },
    { k: "Subiranotasuna", t: ["II. Errepublika"], d: "Botere politikoaren azken iturria nor den adierazten duen kontzeptua, herritarren borondatearekin lotua." },

    { k: "Bonbardaketa estrategikoa", t: ["Gerra Zibila"], d: "Helburu militarrez gain industria, komunikazioak edo populazio zibilaren morala suntsitzeko aire-erasoen erabilera." },
    { k: "Diktadura", t: ["Gerra Zibila", "Frankismoa I"], d: "Boterea pertsona edo talde baten esku kontzentratzen duen sistema autoritarioa, askatasunak eta pluralismoa mugatuz." },
    { k: "Erbestea", t: ["Gerra Zibila", "Frankismoa I"], d: "Gerra, jazarpena edo arrazoi politikoengatik norberaren herrialdea uztera behartuta joatea." },
    { k: "Errepresioa", t: ["Gerra Zibila", "Frankismoa I"], d: "Botere politikoak oposizioa edo disidentzia zigortzeko erabiltzen dituen indarkeria, kontrol juridiko, espetxeratze eta beldur mekanismoak." },
    { k: "Erretagoardia", t: ["Gerra Zibila"], d: "Frontearen atzeko lurraldea, borroka zuzena ez baina gerraren ondorio politiko, sozial eta ekonomikoak bizi dituena." },
    { k: "Estatuaren kolapsoa", t: ["Gerra Zibila"], d: "Estatuak ordena publikoa, indarkeria legitimoaren kontrola eta administrazioaren funtzionamendua bermatzeko gaitasuna galtzea." },
    { k: "Faxismoa", t: ["Gerra Zibila", "Frankismoa I"], d: "Ideologia autoritario, ultranazionalista, antikomunista eta antiliberala, lidergo sendoa eta indarkeria politikoa defendatzen dituena." },
    { k: "Frontea", t: ["Gerra Zibila"], d: "Bi armaden arteko borroka-eremua, gerraren bilakaera militar eta politikoa baldintzatzen duena." },
    { k: "Gerraren nazioartekotzea", t: ["Gerra Zibila"], d: "Barne-gatazka batek kanpoko potentzien laguntza, interes eta esku-hartzearen ondorioz nazioarteko dimentsioa hartzea." },
    { k: "Militarizazioa", t: ["Gerra Zibila", "Frankismoa I"], d: "Egitura zibil edo irregularrak diziplina eta aginte militar baten menpe jartzeko prozesua." },
    { k: "Ez-Interbentzioa", t: ["Gerra Zibila"], d: "Kanpoko potentziek gatazka batean laguntza militarra ez emateko aldarrikatzen duten politika, praktikan desoreka sor dezakeena." },
    { k: "Propaganda", t: ["Gerra Zibila", "Frankismoa I"], d: "Iritzi publikoa mobilizatzeko, aurkaria deslegitimatzeko edo norberaren kausa justifikatzeko komunikazio politiko antolatua." },
    { k: "Gurutzada", t: ["Gerra Zibila", "Frankismoa I"], d: "Borroka politiko edo militarra erlijioaren defentsaren izenean legitimizatzeko erabiltzen den kontzeptua." },
    { k: "Milizia", t: ["Gerra Zibila"], d: "Alderdi, sindikatu edo talde politiko batek antolatutako indar armatu irregularra." },
    { k: "Terrore gorria", t: ["Gerra Zibila"], d: "Errepublikaren aldeko eremuan gertatutako indarkeria iraultzaile eta antiklerikalari emandako izendapen historiografikoa." },
    { k: "Terrore zuria", t: ["Gerra Zibila", "Frankismoa I"], d: "Matxinatuen eta frankisten eremuan egindako errepresio sistematikoari emandako izendapen historiografikoa." },

    { k: "Caudillismoa", t: ["Frankismoa I"], d: "Botere politiko osoa buruzagi bakar baten inguruan antolatzen duen eredua." },
    { k: "Demokrazia organikoa", t: ["Frankismoa I", "Frankismoa II"], d: "Frankismoak demokrazia liberalaren ordezko gisa aurkeztu zuen ordezkaritza-eredu kontrolatua, familia, udalerria eta sindikatua ardatz hartuta." },
    { k: "Depurazioa", t: ["Frankismoa I"], d: "Erregimenak administraziotik, hezkuntzatik edo lanpostuetatik pertsona susmagarriak kanporatzeko erabilitako garbiketa politikoa." },
    { k: "Diktadura pertsonalista", t: ["Frankismoa I"], d: "Boterea pertsona bakar baten inguruan antolatzen duen diktadura mota, erakundeak agintariaren menpe jarriz." },
    { k: "Errazionamendua", t: ["Frankismoa I"], d: "Oinarrizko produktuen banaketa estatuak txartelen edo kupoen bidez kontrolatzeko sistema." },
    { k: "Estraperloa", t: ["Frankismoa I"], d: "Eskasia eta errazionamenduaren testuinguruan sortutako merkatu beltza, prezio altu eta kanal ez-ofizialekin." },
    { k: "Erbesteko oposizioa", t: ["Frankismoa I"], d: "Diktaduraren ondorioz kanpora jo behar izan zuten alderdi, sindikatu, gobernu-erakunde eta militanteen jarduera politikoa." },
    { k: "Funtsezko Legeak", t: ["Frankismoa I"], d: "Frankismoak konstituzio demokratikorik gabe erregimenari egitura juridiko eta instituzionala emateko sortutako lege-multzoa." },
    { k: "Genero-eredu frankista", t: ["Frankismoa I"], d: "Emakumea emazte, ama eta etxeko zaintzaile gisa definitu zuen rol sozial eta moral tradizionala." },
    { k: "Gosearen urteak", t: ["Frankismoa I"], d: "Gerraosteko eskasia, miseria eta elikadura urria izendatzeko erabiltzen den adierazpena." },
    { k: "Isolamendu internazionala", t: ["Frankismoa I"], d: "Bigarren Mundu Gerraren ondoren frankismoak pairatu zuen bazterketa diplomatiko eta politikoa." },
    { k: "Klientelismoa", t: ["Frankismoa I", "Berrezarkuntza"], d: "Mesedeak, kontaktuak eta leialtasun politikoa erabiliz baliabideak edo aukerak lortzeko sistema informala." },
    { k: "Maquis", t: ["Frankismoa I"], d: "Frankismoaren aurkako gerrilla armatuari emandako izena, batez ere 1940ko hamarkadan jardun zuena." },
    { k: "Mugimendu Nazionala", t: ["Frankismoa I"], d: "Frankismoaren antolaketa politiko eta ideologiko osoa izendatzeko kontzeptua, alderdi bakarra, propaganda eta atxikimendu-sareak barne." },
    { k: "Nazional-katolizismoa", t: ["Frankismoa I"], d: "Espainiaren identitatea katolizismoarekin lotu zuen frankismoaren ideologia nagusietako bat." },
    { k: "Sindikatu Bertikala", t: ["Frankismoa I"], d: "Langileak eta enpresariak egitura berean sartzen zituen lan-antolaketa ofiziala, sindikatu askatasuna ezabatuz.", a: ["sindikalismo bertikala"] },
    { k: "Teknokratak", t: ["Frankismoa I", "Frankismoa II"], d: "Ekonomia eta administrazioa modu teknikoago eta pragmatikoagoan kudeatzearen alde egin zuten erregimeneko eliteak." },
    { k: "Desarrollismoa", t: ["Frankismoa II"], d: "1959tik aurrera frankismoak bultzatutako hazkunde ekonomiko azkar eta desorekatuaren etapa." },
    { k: "Aperturismoa", t: ["Frankismoa II"], d: "Erregimenaren barruan aldaketa mugatuak onartu nahi zituen jarrera, sistema autoritarioaren oinarria hautsi gabe." },
    { k: "Atzerriko kapitala", t: ["Frankismoa II"], d: "Kanpoko inbertsioek ekonomia modernizatzeko eta industrializazioa finantzatzeko izan zuten zeregina." },
    { k: "Babes soziala", t: ["Frankismoa II"], d: "Gizartearen zati batek erregimen bati ematen dion atxikimendu, onarpen edo egokitzapen maila." },
    { k: "Barne-migrazioa", t: ["Frankismoa II"], d: "Herrialde baten barruan landa-eremuetatik industria-gune edo hirietara egiten den biztanleria-mugimendua.", a: ["Migrazio barnekoa", "barne migrazioa"] },
    { k: "Bunkerra", t: ["Frankismoa II", "Trantsizioa"], d: "Frankismoaren barruko sektore immobilista eta gogorren multzoa, aldaketa demokratikoaren aurkakoa." },
    { k: "Egonkortze Plana", t: ["Frankismoa II"], d: "Autarkiaren porrota gainditu eta ekonomia irekitzeko neurri ekonomikoen multzoa, hazkunde berriaren abiapuntu izan zena." },
    { k: "Egokitzapena", t: ["Frankismoa II"], d: "Diktaduraren barruan bizirauteko edo eguneroko bizimodua lehenesteko hartutako jarrera praktikoa." },
    { k: "Errepresio berantiarra", t: ["Frankismoa II"], d: "Frankismoaren azken urteetan oposizio politiko, langile-mugimendu, nazionalismo eta mugimendu sozialen aurkako kontrol eta zigor mekanismoen multzoa." },
    { k: "Frankismo berantiarra", t: ["Frankismoa II"], d: "1960ko hamarkadaren amaieratik 1975era arteko etapa, modernizazio soziala eta askatasun politikoen ukapena batera bizi izan zirena." },
    { k: "Garapen Planak", t: ["Frankismoa II"], d: "1960ko hamarkadan hazkunde ekonomikoa gidatzeko bultzatutako plangintza ekonomikoak, industria-poloak eta azpiegiturak sustatzeko." },
    { k: "Industrializazio desorekatua", t: ["Frankismoa II"], d: "Industria-hazkundea lurralde eta sektore guztietan berdin banatzen ez denean sortzen den garapen-eredua." },
    { k: "Instituzionalizazioa", t: ["Frankismoa II"], d: "Erregimen batek bere boterea lege, erakunde eta prozeduren bidez egonkortzeko egiten duen prozesua." },
    { k: "Klase ertain berriak", t: ["Frankismoa II"], d: "Garapen ekonomikoaren eta zerbitzuen hazkundearen ondorioz sortu edo indartu ziren gizarte-talde urbanoak." },
    { k: "Kontsumo-gizartea", t: ["Frankismoa II", "Monarkia parlamentarioa"], d: "Ondasun eta zerbitzuen kontsumoa eguneroko bizitzaren eta gizarte-identitatearen osagai nagusi bihurtzen den eredua." },
    { k: "Nazioarteko kapitalismoa", t: ["Frankismoa II"], d: "Merkatu, inbertsio, teknologia eta merkataritza-sare globaletan oinarritutako ekonomia-sistema." },
    { k: "Oinarrizko Legeak", t: ["Frankismoa II"], d: "Frankismoaren egitura juridiko eta instituzionala antolatzeko sortutako lege multzoa, jarraipena eta ondorengotza bermatzeko erabilia." },
    { k: "Oposizio soziala", t: ["Frankismoa II"], d: "Langileek, ikasleek, auzo-elkarteek, sektore kritikoek eta mugimendu kulturalek erregimenaren aurka egindako mobilizazioen multzoa." },
    { k: "Salbuespen-egoera", t: ["Frankismoa II"], d: "Estatuak ordena publikoa arriskuan dagoela argudiatuz eskubideak murrizteko eta kontrol-neurriak gogortzeko ezartzen duen egoera." },
    { k: "Turismoaren boom-a", t: ["Frankismoa II"], d: "1960ko hamarkadan turismoaren hazkunde azkarra, dibisak, zerbitzu-sektorea eta kultura-aldaketak ekarri zituena." },
    { k: "Urbanizazioa", t: ["Frankismoa II"], d: "Biztanleria hiri-eremuetan kontzentratzeko prozesua, migrazioak, etxebizitza-premiak eta periferien hazkundea eraginez." },

    { k: "Amnistia", t: ["Trantsizioa"], d: "Delitu edo zigor politikoak barkatzeko neurri juridikoa, preso politikoen askatzea eta erbesteratuen itzulera errazteko erabilia." },
    { k: "Autonomien estatua", t: ["Trantsizioa"], d: "1978ko Konstituzioaren ondoren Espainian sortutako lurralde-antolaketa eredua, autonomia erkidegoei eskumenak aitortuz." },
    { k: "Demokrazia parlamentarioa", t: ["Trantsizioa"], d: "Hauteskunde libreen bidezko ordezkaritza eta gobernuaren parlamentuarekiko erantzukizuna uztartzen dituen sistema politikoa." },
    { k: "Desenkantoa", t: ["Trantsizioa"], d: "Demokrazia iritsi ondoren krisi ekonomikoak, langabeziak, indarkeriak eta aldaketa motelak sortutako frustrazio politiko eta soziala." },
    { k: "Erreforma politikoa", t: ["Trantsizioa"], d: "Diktaduraren lege eta instituzioetatik abiatuta sistema demokratikorantz egindako aldaketa-prozesua." },
    { k: "Gobernagarritasuna", t: ["Trantsizioa", "Monarkia parlamentarioa"], d: "Sistema politiko batek erabakiak hartu, egonkortasuna mantendu eta krisiak kudeatzeko duen gaitasuna." },
    { k: "Jarraitutasuna", t: ["Trantsizioa"], d: "Erregimen zaharreko pertsona, erakunde, interes edo praktikak sistema berrira egokituta mantentzea." },
    { k: "Kontsentsua", t: ["Trantsizioa"], d: "Indar politiko desberdinen arteko akordio zabala, gatazka handiak saihestu eta sistema berria egonkortzeko." },
    { k: "Krisi ekonomikoa", t: ["Trantsizioa", "Monarkia parlamentarioa"], d: "Produkzioaren, enpleguaren, prezioen edo bizi-baldintzen okertze sakona, erabaki politikoak baldintzatzen dituena." },
    { k: "Legalizazioa", t: ["Trantsizioa"], d: "Aurretik debekatuta zeuden alderdi, sindikatu edo erakunde politikoak legez onartzeko prozesua." },
    { k: "Monarkia parlamentarioa", t: ["Trantsizioa", "Monarkia parlamentarioa"], d: "Erregea estatu-buru den baina botere politikoa parlamentuaren eta gobernu demokratikoaren bidez gauzatzen den sistema." },
    { k: "Oposizio demokratikoa", t: ["Trantsizioa"], d: "Frankismoaren aurka eta askatasun politikoen, amnistiaren eta hauteskunde libreen alde jardun zuten indarren multzoa." },
    { k: "Subiranotasun popularra", t: ["Trantsizioa"], d: "Botere politikoaren azken iturria herritarren borondatea dela dioen printzipio demokratikoa." },
    { k: "Terrorismoa", t: ["Trantsizioa", "Monarkia parlamentarioa"], d: "Helburu politikoak lortzeko indarkeria sistematikoa eta beldur soziala erabiltzen dituen jarduera." },
    { k: "Trantsizioa", t: ["Trantsizioa"], d: "Frankismoaren diktaduratik demokrazia parlamentariora igarotzeko prozesu politiko konplexua." },

    { k: "Alternantzia demokratikoa", t: ["Monarkia parlamentarioa"], d: "Boterea hauteskundeen bidez alderdi batetik bestera modu baketsuan igarotzea." },
    { k: "Autogobernua", t: ["Trantsizioa", "Monarkia parlamentarioa"], d: "Lurralde batek bere erakunde propioen bidez zenbait eskumen politiko eta administratibo kudeatzeko duen gaitasuna." },
    { k: "Barne-merkatu europarra", t: ["Monarkia parlamentarioa"], d: "Europako integrazioaren barruan ondasunen, zerbitzuen, kapitalen eta pertsonen zirkulazioa errazten duen espazio ekonomikoa." },
    { k: "Berrindustrializazioa", t: ["Monarkia parlamentarioa"], d: "Krisian zeuden industria zaharren ordez sektore modernoagoak, teknologikoagoak eta lehiakorragoak garatzeko prozesua." },
    { k: "Biktimen aitortza", t: ["Monarkia parlamentarioa"], d: "Terrorismoaren biktimei ikusgarritasuna, memoria, duintasuna eta babes instituzionala emateko prozesua." },
    { k: "Desindustrializazioa", t: ["Monarkia parlamentarioa"], d: "Industria-jardueraren pisua galtzea, lantegiak ixtea eta enplegu industriala murriztea dakarren prozesua." },
    { k: "Gizarte zibila", t: ["Monarkia parlamentarioa"], d: "Estatuaren eta alderdien egituretatik kanpo herritarrek, elkarteek eta mugimenduek osatzen duten espazio soziala." },
    { k: "Gizarte-desorekak", t: ["Monarkia parlamentarioa"], d: "Modernizazio edo hazkunde-prozesu batean aukerak, baliabideak eta kostuak modu desberdinean banatzean sortzen diren alde sozialak." },
    { k: "Indarkeria terroristaren jarraipena", t: ["Monarkia parlamentarioa"], d: "Diktadura amaitu ondoren terrorismo politikoak demokraziaren egonkortasuna eta bizikidetza baldintzatzen jarraitzea." },
    { k: "Industria-birmoldaketa", t: ["Monarkia parlamentarioa"], d: "Krisian zeuden industria-sektoreak ixteko, murrizteko edo berrantolatzeko politika ekonomikoa." },
    { k: "Langabezia estrukturala", t: ["Monarkia parlamentarioa"], d: "Ekonomiaren egitura-aldaketek sortzen duten langabezia iraunkorra, ez krisi labur baten ondorio hutsa." },
    { k: "Lan-prekarietatea", t: ["Monarkia parlamentarioa"], d: "Lan-baldintza ezegonkorrak, soldata baxuak, aldi baterako kontratuak eta babes sozial urria nagusitzen diren egoera." },
    { k: "Modernizazio sozioekonomikoa", t: ["Monarkia parlamentarioa"], d: "Ekonomia, gizartea, administrazioa, kultura eta eguneroko bizimodua eraldatzeko prozesua." },
    { k: "Ongizate-estatua", t: ["Monarkia parlamentarioa"], d: "Herritarrei osasuna, hezkuntza, pentsioak, langabezia-babesa eta gizarte-zerbitzuak bermatzeko estatuak garatzen duen sistema." },
    { k: "Polizia-lankidetza", t: ["Monarkia parlamentarioa"], d: "Estatuen eta segurtasun-indarren arteko koordinazioa, terrorismoaren eta delinkuentzia antolatuaren aurka jarduteko." },
    { k: "Trantsizio ondorengo demokrazia", t: ["Monarkia parlamentarioa"], d: "Frankismoaren ondoren eraikitako sistema demokratikoaren lehen fase egonkortua, gobernu-egonkortasuna eta erronka berriak uztartuz." },
    { k: "Zuzenbide-estatua", t: ["Monarkia parlamentarioa", "Trantsizioa"], d: "Botere publiko guztiak legearen menpe dauden sistema, eskubideak, epaileen kontrola eta berme juridikoak errespetatuz." },

    /* EBAU kontzeptu-hiztegi osagarria (historiaebaukontzeptuhistorikoak): geneukana osatuz, falta ziren kontzeptu garbiak.
       Irizpide bera: pertsona-izenak, alderdi/sigla hutsak eta gertaera datatuak kanpoan. */
    { k: "Absolutismoa", t: ["Antzinako Erregimenaren krisia"], d: "Monarkak botere osoa —legegilea, betearazlea eta judiziala— mugarik gabe bere eskuetan biltzen duen sistema politikoa, jainkozko legitimazioan oinarritua." },
    { k: "Liberalismo ekonomikoa", t: ["Antzinako Erregimenaren krisia", "Berrezarkuntza"], d: "Estatuaren esku-hartzerik gabeko merkatu askearen, jabetza pribatuaren eta lehia librearen aldeko doktrina ekonomikoa." },
    { k: "Kapitalismoa", t: ["Euskal industrializazioa", "Berrezarkuntza"], d: "Ekoizpen-bideen jabetza pribatuan, soldatapeko lanean eta irabazi-bilaketan oinarritutako sistema ekonomikoa." },
    { k: "Protekzionismoa", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Barneko ekoizpena kanpoko lehiatik babesteko arantzelak eta merkataritza-mugak ezartzen dituen politika ekonomikoa." },
    { k: "Burgesia", t: ["Antzinako Erregimenaren krisia", "Euskal industrializazioa", "Berrezarkuntza"], d: "Industria, merkataritza eta kapitalaren jabe den gizarte-klasea, liberalismoaren eta industrializazioaren eragile nagusia." },
    { k: "Klase soziala", t: ["Euskal industrializazioa", "Berrezarkuntza"], d: "Egoera ekonomiko, lanbide eta interes komunen arabera bereizten den gizarte-talde handia." },
    { k: "Estatu-nazioa", t: ["Antzinako Erregimenaren krisia", "Euskal industrializazioa"], d: "Lurralde, herritar eta subiranotasun bateratuan oinarritutako estatu modernoa, nazio-nortasun komun batekin lotua." },
    { k: "Parlamentarismoa", t: ["Berrezarkuntza", "Trantsizioa"], d: "Gobernua parlamentuaren konfiantzaren eta kontrolaren menpe dagoen sistema politikoa." },
    { k: "Monarkia konstituzionala", t: ["Berrezarkuntza"], d: "Erregea estatuburua izaten jarraitzen duen baina haren boterea konstituzio batek mugatzen duen gobernu-eredua." },
    { k: "Totalitarismoa", t: ["Gerra Zibila", "Frankismoa I"], d: "Estatuak bizitza politiko, sozial eta pribatu osoa kontrolatzen duen erregimena: alderdi bakarra, ideologia ofiziala eta askatasunik eza." },
    { k: "Falangismoa", t: ["II. Errepublika", "Gerra Zibila", "Frankismoa I"], d: "Espainiako ideologia faxista, nazio-batasuna, estatu indartsua eta sindikalismo bertikala aldarrikatzen zituena, frankismoaren oinarri ideologikoetako bat.", a: ["Falange"] },
    { k: "Feminismoa", t: ["II. Errepublika", "Monarkia parlamentarioa"], d: "Emakumeen eskubide-berdintasuna eta gizarte-, lan- eta politika-arloko parekidetasuna aldarrikatzen dituen mugimendu eta ideologia." },
    { k: "Errepublikazaletasuna", t: ["Berrezarkuntza", "II. Errepublika"], d: "Monarkiaren ordez errepublika ezartzearen aldeko korronte politikoa, subiranotasun popularrean oinarritua.", a: ["errepublikanismoa"] },
    { k: "Interbentzionismo ekonomikoa", t: ["II. Errepublika", "Frankismoa I"], d: "Estatuak ekonomian zuzenean esku hartzen duen eredua, ekoizpena, prezioak edo merkataritza arautuz." },
    { k: "Gerra Hotza", t: ["Frankismoa I", "Frankismoa II"], d: "II. Mundu Gerraren ondoren AEBen eta SESBen blokeen arteko tentsio politiko, ideologiko eta militarra, gerra ireki batera iritsi gabe." },
    { k: "Zentsura", t: ["Frankismoa I", "Frankismoa II"], d: "Botereak informazioa, prentsa, kultura edo adierazpen askea kontrolatu eta debekatzeko erabiltzen duen tresna." },
    { k: "Memoria historikoa", t: ["Monarkia parlamentarioa"], d: "Iraganeko errepresioa, biktimak eta gertaerak aitortu, gogoratu eta erreparatzeko gizarte- eta politika-prozesua." },
    { k: "Globalizazioa", t: ["Monarkia parlamentarioa"], d: "Ekonomia, kultura eta komunikazioak mundu mailan elkarlotzen eta integratzen dituen prozesua." },
    { k: "Populismoa", t: ["Berrezarkuntza", "Monarkia parlamentarioa"], d: "Herria eliteen aurka jartzen duen diskurtso eta estrategia politikoa, lider karismatiko eta mobilizazio zuzenean oinarritua." },
    { k: "Legitimitatea", t: ["Antzinako Erregimenaren krisia", "Trantsizioa"], d: "Botere politiko bat zilegi eta onargarritzat jotzeko oinarria, dinastikoa, legala edo demokratikoa izan daitekeena." },
    { k: "Obrerismoa/Langile-mugimendua", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Langile-klaseak bere lan- eta bizi-baldintzak hobetzeko antolatu zuen mugimendu soziala: sindikatuak, grebak eta alderdiak.", a: ["langile mugimendua", "obrerismoa"] },
    { k: "Mobilizazioa", t: ["Gerra Zibila", "II. Errepublika"], d: "Gizarte- edo gerra-helburu baterako jendea, baliabideak edo indarrak antolatu eta abian jartzeko prozesua." },

    /* Inflexio-gune eta prozesu esanguratsuak: gertaera huts gisa baino, prozesu historiko gisa lantzen direnak. */
    { k: "Independentzia Gerra", t: ["Antzinako Erregimenaren krisia"], d: "Napoleonen okupazioaren aurkako gerra (1808-1814), gerrilla, foru-erresistentzia eta lehen prozesu liberala uztartu zituena Espainia garaikidearen abiapuntuan." },
    { k: "Cadizko Gorteak", t: ["Antzinako Erregimenaren krisia"], d: "1810-1813ko gorte konstituziogileak, lehen aldiz subiranotasun nazionala eta liberalismoa ezarri zituztenak (1812ko Konstituzioa), Antzinako Erregimena gainditzeko prozesuan.", a: ["Gorte konstituziogileak"] },
    { k: "Sexenio Demokratikoa", t: ["Antzinako Erregimenaren krisia"], d: "1868-1874ko aldi iraultzailea: monarkia eraistea, sufragio unibertsala eta lehen errepublika, demokrazia ezartzeko saiakera Berrezarkuntzaren aurretik.", a: ["sei urte demokratikoak"] },
    { k: "Kolonien galera", t: ["Berrezarkuntza"], d: "1898ko azken kolonien (Kuba, Filipinak, Puerto Rico) galera, inperioaren amaiera eta Berrezarkuntzaren sistemaren krisi moral eta politikoa eragin zituena.", a: ["98ko Hondamendia", "98ko krisia", "Inperioaren amaiera"] },
    { k: "98ko belaunaldia", t: ["Berrezarkuntza"], d: "Espainiaren atzerapena eta nortasuna gogoetagai hartu zituen idazle eta pentsalarien belaunaldia, 1898ko krisiaren ondoren erregenerazionismoarekin lotua." },
    { k: "1917ko krisia", t: ["Berrezarkuntza", "Euskal industrializazioa"], d: "Berrezarkuntzaren sistema ahuldu zuen krisi hirukoitza: tentsio militarra (juntak), politikoa (parlamentu-batzarra) eta soziala (greba orokorra).", a: ["1917ko krisi hirukoitza"] },
    { k: "1934ko Urriko Iraultza", t: ["II. Errepublika"], d: "1934ko urrian gertatutako altxamendu iraultzailea (batez ere Asturias eta Katalunian), Errepublikako polarizazioaren eta ezker-eskuin talkaren adierazle.", a: ["Urriko Iraultza", "1934ko iraultza"] }
  ];

  var STOPWORDS = [
    "baten", "batek", "batean", "batetik", "bezala", "bidez", "bitartez", "duten", "duen",
    "egiten", "erabili", "erabiltzen", "eredua", "eta", "edo", "ere", "haien", "haren",
    "horrek", "horren", "izateko", "izendatzeko", "lotuta", "modu", "nagusi", "nagusietako",
    "ondorioz", "politiko", "politikoa", "politikoak", "prozesua", "sistema", "sozial",
    "soziala", "sozialak", "testuinguruan", "zituen", "zuen"
  ];

  function normalizeText(value) {
    return String(value)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ñ/g, "n");
  }

  function slugify(value) {
    return normalizeText(value)
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function unique(items) {
    var seen = {};
    return items.filter(function (item) {
      var key = normalizeText(item).trim();
      if (!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function aliasesFor(name, extraAliases) {
    var cleaned = name.replace(/\([^)]*\)/g, "").trim();
    var parts = cleaned.split(/[\/]/).map(function (part) { return part.trim(); });
    var base = [name, cleaned].concat(parts).concat(extraAliases || []);
    if (cleaned.indexOf("-") !== -1) base.push(cleaned.replace(/-/g, " "));
    if (cleaned.indexOf("/") !== -1) base.push(cleaned.replace(/\//g, " "));
    return unique(base);
  }

  function keywordsFor(raw) {
    var pieces = aliasesFor(raw.k, raw.a).concat(String(raw.d).split(/[^A-Za-z0-9\u00C0-\u017F-]+/));
    return unique(pieces
      .map(function (item) { return item.trim(); })
      .filter(function (item) {
        var normalized = normalizeText(item);
        return item.length > 4 && STOPWORDS.indexOf(normalized) === -1;
      }))
      .slice(0, 9);
  }

  function topicOrder(topics) {
    return topics.reduce(function (min, topic) {
      return Math.min(min, TOPIC_META[topic] ? TOPIC_META[topic].ordena : 9999);
    }, 9999);
  }

  function topicEra(topics) {
    return unique(topics.map(function (topic) {
      return TOPIC_META[topic] ? TOPIC_META[topic].garaia : topic;
    })).join(" / ");
  }

  var concepts = RAW_CONCEPTS.map(function (raw) {
    return {
      id: slugify(raw.k),
      kontzeptua: raw.k,
      gaiak: raw.t,
      definizioLaburra: raw.d,
      garaia: topicEra(raw.t),
      loturak: [],
      akatsOhikoak: [
        raw.k + " definizio hutsean uztea, testuinguru historikorik gabe.",
        "Gai bereko beste kontzeptuekin duen lotura kausa-ondorioz ez azaltzea."
      ],
      esaldiErabilgarriak: [
        raw.k + " kontzeptua " + raw.t[0] + " gaia ulertzeko giltza da.",
        "Kontzeptu hau kokatzean, garaia, eragile sozialak eta ondorio politikoak lotu behar dira."
      ],
      zailtasuna: raw.t.length > 2 || raw.d.length > 180 ? 3 : 2,
      hitzGakoak: keywordsFor(raw),
      konektoreEgokiak: ["ondorioz", "testuinguru horretan", "horren bidez", "hala ere", "aldi berean"],
      aliases: aliasesFor(raw.k, raw.a),
      ordenHistorikoa: topicOrder(raw.t)
    };
  });

  concepts.forEach(function (concept) {
    var related = concepts
      .filter(function (other) {
        return other.id !== concept.id && other.gaiak.some(function (topic) {
          return concept.gaiak.indexOf(topic) !== -1;
        });
      })
      .sort(function (a, b) {
        var sharedA = a.gaiak.filter(function (topic) { return concept.gaiak.indexOf(topic) !== -1; }).length;
        var sharedB = b.gaiak.filter(function (topic) { return concept.gaiak.indexOf(topic) !== -1; }).length;
        if (sharedA !== sharedB) return sharedB - sharedA;
        return Math.abs(a.ordenHistorikoa - concept.ordenHistorikoa) - Math.abs(b.ordenHistorikoa - concept.ordenHistorikoa);
      })
      .slice(0, 7)
      .map(function (other) { return other.id; });
    concept.loturak = related;
  });

  window.LKE_CONCEPT_SOURCE = {
    pdf: "Historia_BTX2_Unikopia_APunteak.pdf",
    filter: "Kontzeptu historiko-politikoak lehenetsita; pertsona-izenak, siglak eta gertaera hutsak kanpoan utzita.",
    count: concepts.length
  };
  window.LKE_CONCEPTS = concepts;
}());
