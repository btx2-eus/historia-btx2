/* Ulermen-galderen bankua · Historia BTX2
 * Galdera bakoitzak: epigrafe ofiziala (USaP 2026-27), mota, galdera, ideia gakoak,
 * erlazio gakoa (3. mailarako ezinbestekoa), ohiko akatsak eta pista sokratikoak.
 * Gai berri bat gehitzeko: gehitu objektu bat `gaiak` zerrendan, egitura berarekin.
 */
window.ULERMEN_BANKUA = {
  bertsioa: "2026-10-31",

  motak: {
    kausa: { izena: "Kausak", galdera: "Zergatik gertatu zen?" },
    ondorioa: { izena: "Ondorioak", galdera: "Zer ekarri zuen?" },
    aldaketa: { izena: "Aldaketa", galdera: "Zer aldatu zen eta zergatik?" },
    kontzeptua: { izena: "Kontzeptua testuinguruan", galdera: "Zer zen eta zergatik da garrantzitsua?" },
    akatsa: { izena: "Akatsa zuzendu", galdera: "Zer dago gaizki baieztapen honetan?" }
  },

  mailak: [
    { maila: 0, izena: "Ez du ulertu", azalpena: "Ez dio galderari erantzuten, edo funtsezko akats historiko batek erantzun osoa baliogabetzen du." },
    { maila: 1, izena: "Zatika", azalpena: "Datu edo ideia solteak ditu, baina deskribatu edo zerrendatu egiten ditu: ez du azaltzen zergatik edo nola." },
    { maila: 2, izena: "Ulertu du", azalpena: "Ideia gako gehienak zuzen ditu eta galderari erantzuten dio, baina erlazio gakoa partziala edo inplizitua da." },
    { maila: 3, izena: "Ondo garatua", azalpena: "Ideia gakoak erlazio esplizitu batekin lotzen ditu (kausa → ondorioa, aurretik → ondoren…), zehaztasunez (datak, eragileak, kontzeptuak) eta akatsik gabe." }
  ],

  arauak: [
    "Erlazio gakorik ez badago, gehienez 2. maila.",
    "Akats historiko larri bat badago (data, eragile edo prozesu okerra), gehienez 1. maila.",
    "Kontzeptuen zerrenda edo definizio solteak ez dira azalpena: gehienez 1. maila.",
    "Ideia gakoak ez dira hitzez hitz eskatzen: esanahi bera duten formulazioak onartu."
  ],

  gaiak: [
    {
      num: 4,
      izenburua: "II. Errepublika",
      urteak: "1931–1936",
      orria: "temas/04-bigarren-errepublika.html",
      epigrafeak: [
        { num: "4.1", izenburua: "Monarkiaren behin betiko krisia", atala: "g4-1" },
        { num: "4.2", izenburua: "Biurteko errepublikar-sozialista eta haren erreformak", atala: "g4-2" },
        { num: "4.3", izenburua: "Biurteko erradikal-cedista edo kontrarreformatzailea", atala: "g4-4" },
        { num: "4.4", izenburua: "Fronte Popularraren etapa", atala: "g4-5" }
      ],
      galderak: [
        {
          id: "4.1-a",
          epigrafea: "4.1",
          mota: "kausa",
          galdera: "Zergatik esaten da Primo de Riveraren diktadurak, monarkia salbatzeko sortu zenak, monarkia bera hondoratu zuela?",
          ideiak: [
            "Alfonso XIII.ak 1923ko estatu-kolpea onartu eta diktadura babestu zuen; 1876ko Konstituzioa eten zen.",
            "Diktadurak porrot egin zuenean (1930: krisi ekonomikoa, oposizioa, babes militarraren galera), erregea haren konplize gisa ikusi zen.",
            "Berenguer eta Aznarren gobernuek («Dictablanda») ez zuten itzulera konstituzionala bideratzea lortu.",
            "Oposizioa (errepublikanoak, sozialistak, katalanistak) monarkiaren aurka bildu zen."
          ],
          erlazioa: "Erregeak bere burua diktadurari lotu ziolako, diktaduraren porrota monarkiaren beraren porrota bihurtu zen.",
          akatsak: [
            "Primo de Riverak erregea kendu zuela esatea.",
            "Diktadura 1931 arte iraun zuela esatea (1930ean amaitu zen).",
            "Monarkiaren erorketa 1929ko krisiaren ondorio hutsa dela esatea, erregearen erantzukizuna aipatu gabe."
          ],
          pistak: [
            "Nork onartu zuen 1923ko kolpea, eta zer ondorio izan zuen horrek erregearen irudiarentzat?",
            "Diktadura erori zenean, zergatik ez zen monarkia «salbu» geratu?",
            "Zer gertatu zen 1930 eta 1931 bitartean Berenguer eta Aznarren gobernuekin?"
          ]
        },
        {
          id: "4.1-b",
          epigrafea: "4.1",
          mota: "kontzeptua",
          galdera: "Zer izan zen Donostiako Ituna (1930) eta zergatik izan zen erabakigarria Errepublikaren etorrerarako?",
          ideiak: [
            "1930eko abuztuan Donostian sinatutako akordioa: errepublikanoak (Alcalá-Zamora, Maura, Lerroux…), sozialistak (Prieto, De los Ríos) eta ezker katalanista.",
            "Helburua: monarkia amaitu eta errepublika demokratiko bat ezartzea; Kataluniaren autonomia aintzat hartzea.",
            "«Errepublika Aldarrikatzeko Batzordea» sortu zuen, 1931ko apirilean behin-behineko gobernua izango zena.",
            "Oposizio zatitua lehen aldiz helburu komun baten inguruan batu zen."
          ],
          erlazioa: "Itunak oposizioa batu eta gobernu alternatibo bat prestatu zuen; horregatik, monarkia erori zenean, boterea hartzeko prest zegoen talde bat zegoen.",
          akatsak: [
            "EAJ-PNV itunaren parte izan zela esatea (ez zen izan).",
            "Itunak berak Errepublika aldarrikatu zuela esatea (1931ko apirilaren 14an aldarrikatu zen).",
            "Iraultza sozial bat egiteko akordioa izan zela esatea (erregimen politikoa aldatzea zen helburua)."
          ],
          pistak: [
            "Zein indar politiko bildu ziren Donostian, eta zein falta zen Euskal Herritik?",
            "Itunean sortutako batzordeak zer bihurtu zen 1931ko apirilean?",
            "Zergatik zen garrantzitsua oposizioa batzea, monarkia ahul zegoen une hartan?"
          ]
        },
        {
          id: "4.1-c",
          epigrafea: "4.1",
          mota: "akatsa",
          galdera: "Ikasle batek hau idatzi du: «1931ko apirilaren 12an errepublikanoek hauteskunde orokorrak irabazi zituzten Espainia osoan, eta horregatik erori zen monarkia.» Zer dago gaizki? Azaldu zuzen.",
          ideiak: [
            "Udal-hauteskundeak ziren, ez hauteskunde orokorrak.",
            "Hautagai errepublikanoek hiriburuetan eta hiri handietan irabazi zuten; zinegotzi guztiak kontatuta, monarkikoek gehiago lortu zituzten, batez ere landa-eremuan.",
            "Emaitza monarkiari buruzko plebiszitu gisa ulertu zen: hirietako boto librea zilegitasun-galeraren seinale zen.",
            "Erregeak, babes politiko eta militarrik gabe, erbestea aukeratu zuen eta apirilaren 14an Errepublika aldarrikatu zen."
          ],
          erlazioa: "Monarkia ez zen bozka kopuruagatik erori, hirietako emaitza zilegitasunaren galera gisa interpretatu zelako baizik.",
          akatsak: [
            "Akatsa zuzentzea baina zergatik erori zen monarkia azaldu gabe uztea.",
            "Errepublikanoek hauteskundeak Espainia osoan irabazi zituztela onartzea."
          ],
          pistak: [
            "Zer motatako hauteskundeak izan ziren 1931ko apirilaren 12koak?",
            "Non irabazi zuten errepublikanoek, eta zergatik zuen horrek hainbeste pisu politiko?",
            "Bozka kopurua ez bazen erabakigarria izan, zer izan zen?"
          ]
        },
        {
          id: "4.2-a",
          epigrafea: "4.2",
          mota: "ondorioa",
          galdera: "Zergatik sortu zuen 1932ko nekazaritza-erreformak gatazka, bai haren aurkakoen artean bai hura itxaroten zutenen artean?",
          ideiak: [
            "Arazoa: latifundioak Andaluzian eta Extremaduran, jabe gutxi batzuen esku, eta lurrik gabeko jornalero ugari.",
            "1932ko legeak jabetza handiak desjabetu eta nekazariei banatzea aurreikusten zuen.",
            "Lur-jabe handiek eta eskuinak erasotzat hartu zuten eta erreformari aurre egin zioten.",
            "Aplikazioa oso motela eta mugatua izan zen (burokrazia, diru gutxi): familia gutxi kokatu ziren.",
            "Jornalero eta anarkisten frustrazioa: lurren okupazioak eta gatazkak (Casas Viejas, 1933)."
          ],
          erlazioa: "Erreforma batzuentzat gehiegi zen eta besteentzat gutxiegi eta motelegi; horregatik bi aldeetatik sortu zuen oposizioa.",
          akatsak: [
            "Errepublikak lurrak banatu eta nekazaritza-arazoa konpondu zuela esatea.",
            "Erreforma Euskal Herrian edo iparraldean zentratu zela esatea.",
            "Casas Viejas eskuinaren erreakzio gisa aurkeztea (nekazari anarkistak eta Guardia Zibilaren errepresioa izan zen)."
          ],
          pistak: [
            "Zein eskualdetan zegoen nekazaritza-arazoa larriena, eta zergatik?",
            "Lur-jabeen begietatik, zer zekarren erreformak?",
            "Jornaleroen begietatik, zer gertatu zen erreformaren erritmoarekin?"
          ]
        },
        {
          id: "4.2-b",
          epigrafea: "4.2",
          mota: "kausa",
          galdera: "Zer bilatzen zuen Azañaren erreforma militarrak, eta zergatik bihurtu zen arrisku-iturri Errepublikarentzat?",
          ideiak: [
            "Helburua: armada modernizatzea eta botere zibilaren menpe jartzea.",
            "Ofizial soberakina murriztea (erretiroa soldata osoarekin) eta Errepublikari leialtasun-zina eskatzea.",
            "Zaragozako Akademia Militar Nagusia ixtea (Franco zen zuzendaria).",
            "Ofizial kontserbadore askoren haserrea; 1932ko Sanjurjada, 1936ko kolpearen aurrekaria."
          ],
          erlazioa: "Armadaren boterea mugatzeko neurriek ofizial askoren aurkako jarrera elikatu zuten, eta haietako batzuk Errepublikaren aurka altxatu ziren.",
          akatsak: [
            "Azañak armada desegin zuela esatea.",
            "Sanjurjada 1936an gertatu zela esatea (1932koa da)."
          ],
          pistak: [
            "Zer harreman nahi zuen Azañak armadaren eta gobernu zibilaren artean?",
            "Nola sentitu ziren ofizial kontserbadoreak? Ba al dago 1932ko gertakari bat hori erakusten duena?",
            "Zer lotura dago erreforma honen eta 1936ko uztailaren artean?"
          ]
        },
        {
          id: "4.2-c",
          epigrafea: "4.2",
          mota: "kontzeptua",
          galdera: "Zergatik izan ziren hezkuntza-erreforma eta Eliza-Estatua bereizketa Errepublikaren itxaropen-iturri eta, aldi berean, gatazka-iturri?",
          ideiak: [
            "1931ko Konstituzioak Estatu laikoa ezarri zuen: Eliza eta Estatua bereizi, jesuitak desegin.",
            "Hezkuntza publiko, laiko eta doakoa: milaka eskola berri eta irakasleen prestakuntza; analfabetismoa murriztea eta modernizatzea.",
            "Elizaren hierarkiak eta katoliko askok erlijioaren aurkako erasotzat hartu zuten.",
            "Eskuin katolikoa antolatu zen (CEDA, 1933) eta polarizazioa handitu zen; 1931ko eliza-erreketek tentsioa areagotu zuten."
          ],
          erlazioa: "Batzuentzat modernizazioa zena, beste batzuentzat beren balioen aurkako erasoa zen; proiektu berak ilusioa eta erresistentzia sortu zituen.",
          akatsak: [
            "Errepublikak erlijioa debekatu zuela esatea (erlijio-askatasuna aitortu zen).",
            "Hezkuntza-erreforma Elizarekin adostu zela esatea."
          ],
          pistak: [
            "Zer esan nahi du Estatu laikoak? Nola islatu zen 1931ko Konstituzioan?",
            "Zer espero zuten erreformatzaileek eskola publikoaren bidez?",
            "Nola erreakzionatu zuen Elizak, eta zer ondorio politiko izan zuen horrek 1933an?"
          ]
        },
        {
          id: "4.3-a",
          epigrafea: "4.3",
          mota: "aldaketa",
          galdera: "Zergatik deitzen zaio 1933–1935 aldiari «biurteko kontrarreformatzailea»? Azaldu bi adibiderekin.",
          ideiak: [
            "1933ko azaroko hauteskundeak eskuinak irabazi zituen (CEDA eta Lerrouxen Alderdi Erradikala); emakumeek lehen aldiz bozkatu zuten; ezkerra zatituta eta CNTk abstentzioa bultzatu zuen.",
            "Lerrouxek gobernatu zuen, CEDAren babesarekin (CEDA 1934ko urrian sartu zen gobernuan).",
            "Lehen biurteko erreformak geldiarazi edo desegin ziren: adibidez, nekazaritza-erreforma (lurrak jabeei itzuli), erlijio-politika (Elizari eskubideak itzuli), militarrak (ofizial kontserbadoreak berriro) edo hezkuntza (aurrekontuak murriztu).",
            "Ondorioa: ezkerraren eta langileen frustrazioa eta polarizazioa."
          ],
          erlazioa: "«Kontrarreforma» ez da gobernu-aldaketa soilik: aurreko biurtekoaren erreformak geldiarazi edo atzera egitea da, eta adibideek hori frogatu behar dute.",
          akatsak: [
            "CEDAk 1933an zuzenean gobernua osatu zuela esatea.",
            "Gil-Robles gobernuburu edo presidente izan zela esatea.",
            "Adibideak eman baina zein erreformaren aurkakoak diren ez esatea."
          ],
          pistak: [
            "Nork irabazi zuen 1933ko azaroan, eta zergatik galdu zuen ezkerrak?",
            "«Kontrarreforma» hitzean, zer da «kontra» horren objektua?",
            "Aukeratu lehen biurteko erreforma bat: zer egin zuen gobernu berriak harekin?"
          ]
        },
        {
          id: "4.3-b",
          epigrafea: "4.3",
          mota: "kausa",
          galdera: "Zergatik piztu zen 1934ko Urriko Iraultza, eta zergatik izan zen Asturiasen beste lekuetan baino indartsuagoa?",
          ideiak: [
            "Abiapuntua: 1934ko urrian CEDAren hiru ministro gobernuan sartu ziren.",
            "Ezkerrak (PSOE, UGT) faxismorako atarikotzat hartu zuen, Europako testuinguruan (Hitler 1933, Austria 1934); greba orokor iraultzailea deitu zuen.",
            "Asturiasen meatzarien batasuna (sozialistak, anarkistak eta komunistak): lurraldea bi astez kontrolatu zuten.",
            "Katalunian Companysek «Kataluniako Estatua» aldarrikatu zuen Errepublika federalaren barruan, baina berehala zapaldu zuten.",
            "Errepresio gogorra: Franco eta Afrikako armada Asturiasen; mila hildako baino gehiago eta milaka preso."
          ],
          erlazioa: "CEDAren sarrera faxismoaren mehatxu gisa interpretatu zen eta iraultza piztu zuen; Asturiasen langile-batasunak eman zion indar berezia.",
          akatsak: [
            "Urriko Iraultza eskuinaren altxamendua izan zela esatea.",
            "Gerra Zibilaren hasiera izan zela esatea.",
            "Companysek Katalunia independente aldarrikatu zuela esatea (Errepublika federalaren barruko estatua izan zen)."
          ],
          pistak: [
            "Zer gertatu zen 1934ko urrian gobernuan, ezkerra mobilizatzeko?",
            "Zergatik zen hain beldurgarria ezkerrarentzat, Europan 1933–1934an gertatzen ari zenarekin alderatuta?",
            "Zer zuten Asturiasko langileek beste lekuetan falta zena?"
          ]
        },
        {
          id: "4.3-c",
          epigrafea: "4.3",
          mota: "ondorioa",
          galdera: "Nola lagundu zuten 1934ko errepresioak eta 1935eko ustelkeria-aferek Fronte Popularraren garaipena prestatzen?",
          ideiak: [
            "1934ko errepresioak milaka preso politiko utzi zituen; haien amnistia ezkerra batzeko ardatza bihurtu zen.",
            "Estraperlo eta Nombela aferek Lerroux eta Alderdi Erradikala desprestigiatu zituzten; gobernua erori zen.",
            "Alcalá-Zamorak Gorteak desegin eta 1936ko otsailerako hauteskundeak deitu zituen.",
            "Ezkerrak 1933ko zatiketaren ikasgaia ikasi zuen eta koalizio bakarrean aurkeztu zen."
          ],
          erlazioa: "Eskuineko gobernuaren higadura eta ezkerraren batasuna (amnistiaren inguruan) batera gertatu ziren, eta horrek ekarri zuen 1936ko garaipena.",
          akatsak: [
            "Ustelkeria-aferak CEDArekin edo ezkerrarekin lotzea (Lerrouxen inguruko erradikalak izan ziren).",
            "Bi faktoreak aipatu baina hauteskundeekin lotu gabe uztea."
          ],
          pistak: [
            "1934ko errepresioaren ondoren, zer eskaera komun zuten ezkerreko indar guztiek?",
            "Nor geratu zen nahastuta Estraperlo aferan, eta zer ondorio izan zuen gobernuarentzat?",
            "Zer egin zuen ezkerrak 1936an 1933an egin ez zuena?"
          ]
        },
        {
          id: "4.4-a",
          epigrafea: "4.4",
          mota: "kontzeptua",
          galdera: "Zer zen Fronte Popularra eta zergatik irabazi zituen 1936ko otsaileko hauteskundeak?",
          ideiak: [
            "Ezkerreko koalizio zabala: errepublikano aurrerakoiak (Azaña), PSOE eta UGT, Alderdi Komunista eta ezker nazionalistak (ERC, EAE-ANV).",
            "Programa: 1934ko presoen amnistia, 1931ko erreformak berrabiaraztea eta autonomia-estatutuak.",
            "Europako antifaxismoaren testuingurua (fronte popularren estrategia, Frantzian ere bai).",
            "1933an ez bezala, ezkerra batuta aurkeztu zen eta hauteskunde-sistemak koalizio handiak saritzen zituen; otsailaren 16an irabazi zuen."
          ],
          erlazioa: "1933an zatiketak porrota ekarri zuen bezala, 1936an batasunak eta amnistiaren eskaerak garaipena ekarri zuten.",
          akatsak: [
            "Fronte Popularra alderdi bakarra edo alderdi komunista bat zela esatea.",
            "EAJ-PNV Fronte Popularraren parte izan zela esatea (bakarrik aurkeztu zen).",
            "Fronte Popularrak gerra irabazi zuela edo kolpea eman zuela nahastea."
          ],
          pistak: [
            "Zer alderdik osatzen zuten koalizioa? Alderdi bakarra zen?",
            "Zein zen haien eskaera nagusia, 1934ko gertakarien ondoren?",
            "Zer egin zuen ezkerrak desberdin 1933arekin alderatuta?"
          ]
        },
        {
          id: "4.4-b",
          epigrafea: "4.4",
          mota: "kausa",
          galdera: "Zergatik hazi ziren indarkeria eta polarizazioa 1936ko udaberrian, eta nola erabili zuten kolpistek giro hori?",
          ideiak: [
            "Ezkerreko sektoreen lurren okupazioak eta grebak, gobernuaren kontroletik kanpo; lur-jabe eta enpresaburuen presioa eta boikota.",
            "Falangeren kale-borroka eta atentatuak, eta ezkerreko milizien erantzunak.",
            "Krisi instituzionala: Alcalá-Zamora kargutik kendu, Azaña presidente eta Casares Quirogaren gobernu ahula.",
            "Castillo tenientearen (uztailak 12) eta Calvo Soteloren (uztailak 13) hilketak.",
            "Eskuinak «anarkia» diskurtsoa zabaldu zuen; konspirazio militarrak (Mola) giro hori erabili zuen kolpea justifikatzeko."
          ],
          erlazioa: "Indarkeriak kolpearen aitzakia eman zuen, baina konspirazioa lehenagotik zetorren: polarizazioa ez zen kolpearen kausa bakarra, haren justifikazioa baizik.",
          akatsak: [
            "Indarkeria alde bakarrari egoztea.",
            "Kolpea Calvo Soteloren hilketaren ondorioz bakarrik antolatu zela esatea."
          ],
          pistak: [
            "Zer gertatzen zen landa-eremuan eta kaleetan 1936ko udaberrian?",
            "Zergatik zen ahula gobernua egoera kontrolatzeko?",
            "Militarrak noiztik zeuden konspiratzen? Nola erabili zuten «ordena» ideia?"
          ]
        },
        {
          id: "4.4-c",
          epigrafea: "4.4",
          mota: "akatsa",
          galdera: "Ikasle batek idatzi du: «Gerra Zibila Calvo Soteloren hilketaren ondorioz hasi zen.» Zergatik da azalpen hori nahikoa ez? Azaldu zuzen.",
          ideiak: [
            "Konspirazio militarra 1936ko otsaileko hauteskundeen ondoren hasi zen, Mola koordinatzaile zela.",
            "Kausa sakonak: polarizazioa, erreformen aurkako erresistentzia (lur-jabeak, Eliza, armada) eta eskuin antierrepublikanoak hauteskundeen emaitza ez onartzea.",
            "Calvo Soteloren hilketa (uztailak 13) detonantea izan zen: kolpea azkartu zuen eta zalantzan zeuden militar batzuk erabakitzera bultzatu zituen.",
            "Kolpea uztailaren 17an hasi zen Afrikan; porrot partzialak gerra ekarri zuen, ez berehalako garaipena."
          ],
          erlazioa: "Kausa sakonak, epe laburreko kausak eta detonantea bereizi behar dira: hilketak kolpea azkartu zuen, baina ez zuen sortu.",
          akatsak: [
            "Baieztapena zuzentzea baina beste kausa bakar bat ordezko gisa jartzea.",
            "Gerra eta estatu-kolpea gauza bera direla esatea (kolpearen porrot partzialak ekarri zuen gerra)."
          ],
          pistak: [
            "Noiz hasi ziren militarrak kolpea prestatzen? Hilketaren aurretik ala ondoren?",
            "Zer arazo sakon zeuden 1931tik metatuta?",
            "Zer da «detonante» bat, eta nola bereizten da «kausa» batetik?"
          ]
        }
      ]
    }
  ]
};
