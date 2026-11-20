/* Treść kursu „Niemiecki na co dzień” – od zera do B1 i dalej (życie, praca, wakacje).
   Zapis wymowy polskimi literami: WIELKIE litery = akcent; ch po a, o, u = „ch”, po i, e, ä, ö, ü = miękkie „h” (ich = ih);
   ei = „aj”, eu / äu = „oj”, ie = długie „i”, z = „c”, w = „w”, v = „f”, s przed samogłoską = „z”, sch = „sz”,
   sp / st na początku wyrazu = „szp / szt”, ß = „ss”, r = gardłowe „r”, końcówka -er = „a”.
   Aby dodać lekcję: dopisz obiekt do KURS.units (ten sam kształt, pole tags = dla kogo) i usuń ją z KURS.soon. */
window.KURS = {
  /* Test poziomujący: [poziom, zdanie, [opcje], indeks poprawnej] */
  test: [
    ["A1", "Ich ___ aus Polen.", ["bin", "bist", "ist"], 0],
    ["A1", "Wie ___ Sie?", ["heißen", "heiße", "heißt"], 0],
    ["A1", "Er ___ in Berlin.", ["wohne", "wohnt", "wohnst"], 1],
    ["A1", "___ Auto ist rot.", ["Der", "Die", "Das"], 2],
    ["A1", "Co znaczy „Danke”?", ["proszę", "dziękuję", "przepraszam"], 1],
    ["A1", "Co znaczy „Montag”?", ["poniedziałek", "niedziela", "wtorek"], 0],
    ["A1", "Ich ___ zwei Kinder.", ["bin", "habe", "hat"], 1],
    ["A2", "Ich ___ einen Kaffee, bitte.", ["möchte", "möchtest", "möchten"], 0],
    ["A2", "Ich sehe ___ Mann.", ["der", "den", "dem"], 1],
    ["A2", "Wir ___ morgen früh aufstehen.", ["muss", "müssen", "musst"], 1],
    ["A2", "Gestern ___ ich im Büro gearbeitet.", ["bin", "habe", "hat"], 1],
    ["A2", "Der Zug fährt um acht Uhr ___.", ["an", "ab", "auf"], 1],
    ["A2", "Ich komme ___ Polen.", ["aus", "bei", "nach"], 0],
    ["A2", "Kannst du mir bitte ___?", ["helfen", "hilfst", "hilft"], 0],
    ["B1", "Ich bleibe zu Hause, ___ ich krank bin.", ["weil", "aber", "oder"], 0],
    ["B1", "Ich weiß nicht, ___ er kommt.", ["ob", "dass", "wenn"], 0],
    ["B1", "Wenn ich mehr Zeit ___, würde ich öfter reisen.", ["habe", "hätte", "hatte"], 1],
    ["B1", "Das ist der Mann, ___ ich gestern angerufen habe.", ["der", "den", "dem"], 1],
    ["B1", "Ich freue mich ___ den Urlaub.", ["auf", "für", "an"], 0],
    ["B1", "Das Paket wurde gestern ___.", ["geliefert", "liefern", "lieferte"], 0]
  ],

  /* Wymowa: [litera, jak czytać, przykład, wymowa przykładu, znaczenie] */
  abc: [
    ["ä", "jak „e” (otwarte)", "Käse", "KE-ze", "ser"],
    ["ö", "jak francuskie „eu” – usta jak do „o”, mów „e”", "schön", "szön", "ładny"],
    ["ü", "jak polskie „i” z ustami jak do „u”", "Tür", "tür", "drzwi"],
    ["ß", "ostre „ss”", "Straße", "SZTRA-se", "ulica"],
    ["ch po a, o, u", "twarde „ch” jak w polskim", "Buch", "buch", "książka"],
    ["ch po i, e, ä, ö, ü", "miękkie, szeptane „h” (język przy podniebieniu)", "ich", "ih", "ja"],
    ["sch", "„sz”", "Schule", "SZU-le", "szkoła"],
    ["sp / st na początku", "„szp / szt”", "sprechen", "SZPRE-chen", "mówić"],
    ["ei", "„aj”", "Zeit", "cajt", "czas"],
    ["ie", "długie „i”", "Bier", "bir", "piwo"],
    ["eu / äu", "„oj”", "heute", "HOJ-te", "dzisiaj"],
    ["z", "zawsze „c”", "Zimmer", "CI-ma", "pokój"],
    ["s przed samogłoską", "dźwięczne „z”", "sehr", "zer", "bardzo"],
    ["v", "zwykle „f”", "Vater", "FA-ta", "ojciec"],
    ["w", "„w”", "Wasser", "WA-sa", "woda"],
    ["j", "„j”", "ja", "ja", "tak"],
    ["r", "gardłowe, miękkie „r” (po samogłosce prawie jak „a”)", "Uhr", "ua", "zegar / godzina"],
    ["pf", "razem „pf”", "Pfund", "pfunt", "funt"],
    ["qu", "„kw”", "Qualität", "kwa-li-TET", "jakość"],
    ["tsch", "„cz”", "Tschüss", "czüs", "cześć (na pożegnanie)"]
  ],

  /* Zwroty. Kategoria → nazwa i dla kogo (tags). [kategoria, niemiecki, wymowa, polski] */
  work: {
    cats: {
      hello:  { name: "Powitania i grzeczność", tags: ["core"] },
      alltag: { name: "Codzienne życie", tags: ["life", "dom"] },
      essen:  { name: "Jedzenie i zakupy", tags: ["jedzenie", "life", "trip"] },
      reise:  { name: "Podróże i wakacje", tags: ["trip"] },
      phone:  { name: "Telefon", tags: ["klienci", "biuro", "zagranica", "magazyn"] },
      mail:   { name: "Maile i dokumenty", tags: ["biuro", "klienci"] },
      kunden: { name: "Klienci i negocjacje", tags: ["klienci"] },
      arbeit: { name: "Praca w Niemczech", tags: ["zagranica", "magazyn"] },
      arzt:   { name: "Lekarz i urzędy", tags: ["life", "dom"] },
      smalltalk: { name: "Rozmowa na co dzień", tags: ["rozmowa"] },
      amt:    { name: "Urząd i administracja", tags: ["administracja", "life"] }
    },
    items: [
      ["hello", "Guten Tag", "GU-ten tak", "Dzień dobry"],
      ["hello", "Guten Morgen", "GU-ten MOR-gen", "Dzień dobry (rano)"],
      ["hello", "Wie geht es Ihnen?", "wi get es I-nen", "Jak się Pan/Pani miewa?"],
      ["hello", "Danke, gut. Und Ihnen?", "DAN-ke, gut. unt I-nen", "Dziękuję, dobrze. A Panu/Pani?"],
      ["hello", "Freut mich", "frojt mih", "Miło mi"],
      ["hello", "Ich heiße Maria", "ih HAJ-se ma-RI-a", "Nazywam się Maria"],
      ["hello", "Vielen Dank", "FI-len dank", "Bardzo dziękuję"],
      ["hello", "Bitte schön", "BI-te szön", "Proszę bardzo"],
      ["hello", "Entschuldigung", "ent-SZUL-di-gung", "Przepraszam"],
      ["hello", "Können Sie das wiederholen?", "KÖ-nen zi das WI-da-HO-len", "Czy może Pan/Pani to powtórzyć?"],
      ["hello", "Bitte sprechen Sie langsamer", "BI-te SZPRE-chen zi LANG-za-ma", "Proszę mówić wolniej"],
      ["hello", "Ich verstehe nicht", "ih fer-SZTE-e niht", "Nie rozumiem"],
      ["hello", "Ich lerne Deutsch", "ih LER-ne dojcz", "Uczę się niemieckiego"],
      ["hello", "Auf Wiedersehen", "auf WI-da-ze-en", "Do widzenia"],
      ["alltag", "Wo ist die Toilette?", "wo ist di to-a-LE-te", "Gdzie jest toaleta?"],
      ["alltag", "Wie viel kostet das?", "wi fil KOS-tet das", "Ile to kosztuje?"],
      ["alltag", "Ich wohne in Polen", "ih WO-ne in PO-len", "Mieszkam w Polsce"],
      ["alltag", "Ich habe zwei Kinder", "ih HA-be cwaj KIN-da", "Mam dwoje dzieci"],
      ["alltag", "Wie spät ist es?", "wi szpet ist es", "Która jest godzina?"],
      ["alltag", "Ich habe keine Zeit", "ih HA-be KAJ-ne cajt", "Nie mam czasu"],
      ["essen", "Ich möchte einen Kaffee", "ih MÖH-te AJ-nen KA-fe", "Poproszę kawę"],
      ["essen", "Die Speisekarte, bitte", "di SZPAJ-ze-KAR-te BI-te", "Poproszę kartę dań"],
      ["essen", "Ich nehme das Schnitzel", "ih NE-me das SZNI-cel", "Wezmę sznycel"],
      ["essen", "Die Rechnung, bitte", "di REH-nung BI-te", "Poproszę rachunek"],
      ["essen", "Zusammen oder getrennt?", "cu-ZA-men O-da ge-TRENT", "Razem czy osobno?"],
      ["essen", "Haben Sie das in einer anderen Größe?", "HA-ben zi das in AJ-na AN-de-ren GRÖ-se", "Czy macie to w innym rozmiarze?"],
      ["reise", "Ich habe ein Zimmer reserviert", "ih HA-be ajn CI-ma re-zer-WIRT", "Mam zarezerwowany pokój"],
      ["reise", "Wo ist der Bahnhof?", "wo ist der BAN-hof", "Gdzie jest dworzec?"],
      ["reise", "Eine Fahrkarte nach Berlin, bitte", "AJ-ne FAR-kar-te nach ber-LIN BI-te", "Poproszę bilet do Berlina"],
      ["reise", "Wann fährt der Zug ab?", "wan fert der cuk ap", "Kiedy odjeżdża pociąg?"],
      ["reise", "Mein Koffer ist weg", "majn KO-fa ist wek", "Zginęła moja walizka"],
      ["reise", "Wie komme ich zum Strand?", "wi KO-me ih cum sztrant", "Jak dojdę na plażę?"],
      ["phone", "Hier spricht Maria Nowak", "hir szpriht ma-RI-a NO-wak", "Mówi Maria Nowak"],
      ["phone", "Kann ich bitte Herrn Müller sprechen?", "kan ih BI-te hern MÜ-la SZPRE-chen", "Czy mogę prosić pana Müllera?"],
      ["phone", "Einen Moment, bitte", "AJ-nen mo-MENT BI-te", "Chwileczkę, proszę"],
      ["phone", "Ich verbinde Sie", "ih fer-BIN-de zi", "Już łączę"],
      ["phone", "Ich rufe Sie zurück", "ih RU-fe zi cu-RÜK", "Oddzwonię do Pana/Pani"],
      ["phone", "Können Sie bitte lauter sprechen?", "KÖ-nen zi BI-te LAU-ta SZPRE-chen", "Czy może Pan/Pani mówić głośniej?"],
      ["mail", "Sehr geehrte Damen und Herren", "zer ge-E-rte DA-men unt HE-ren", "Szanowni Państwo"],
      ["mail", "Vielen Dank für Ihre E-Mail", "FI-len dank für I-re I-mejl", "Dziękuję za Pana/Pani maila"],
      ["mail", "Anbei finden Sie die Rechnung", "AN-baj FIN-den zi di REH-nung", "W załączniku przesyłam fakturę"],
      ["mail", "Ich schicke Ihnen das Angebot", "ih SZI-ke I-nen das AN-ge-bot", "Wyślę Panu/Pani ofertę"],
      ["mail", "Mit freundlichen Grüßen", "mit FROYNT-li-chen GRÜ-sen", "Z poważaniem"],
      ["mail", "Ich melde mich morgen", "ih MEL-de mih MOR-gen", "Odezwę się jutro"],
      ["kunden", "Was kann ich für Sie tun?", "was kan ih für zi tun", "W czym mogę pomóc?"],
      ["kunden", "Das ist unser bester Preis", "das ist UN-za BES-ta prajs", "To nasza najlepsza cena"],
      ["kunden", "Wir liefern innerhalb von drei Tagen", "wir LI-fern I-na-halp fon draj TA-gen", "Dostarczamy w ciągu trzech dni"],
      ["kunden", "Das tut mir leid", "das tut mir lajt", "Bardzo mi przykro"],
      ["kunden", "Wir klären das sofort", "wir KLE-ren das zo-FORT", "Wyjaśnimy to od razu"],
      ["kunden", "Ich schicke Ihnen ein Angebot", "ih SZI-ke I-nen ajn AN-ge-bot", "Wyślę Panu/Pani ofertę"],
      ["arbeit", "Ich suche Arbeit", "ih ZU-che AR-bajt", "Szukam pracy"],
      ["arbeit", "Ich habe Erfahrung im Lager", "ih HA-be er-FA-rung im LA-ga", "Mam doświadczenie w magazynie"],
      ["arbeit", "Wann beginnt die Schicht?", "wan be-GINT di sziht", "Kiedy zaczyna się zmiana?"],
      ["arbeit", "Ich brauche Schutzkleidung", "ih BRAU-che SZUC-klaj-dung", "Potrzebuję odzieży ochronnej"],
      ["arbeit", "Wo ist mein Arbeitsplatz?", "wo ist majn AR-bajcs-plac", "Gdzie jest moje stanowisko pracy?"],
      ["arbeit", "Ich habe eine Frage", "ih HA-be AJ-ne FRA-ge", "Mam pytanie"],
      ["arzt", "Ich habe Kopfschmerzen", "ih HA-be KOPF-szmer-cen", "Boli mnie głowa"],
      ["arzt", "Ich brauche einen Arzt", "ih BRAU-che AJ-nen arct", "Potrzebuję lekarza"],
      ["arzt", "Ich habe einen Termin", "ih HA-be AJ-nen ter-MIN", "Mam umówioną wizytę"],
      ["arzt", "Ich möchte einen Termin vereinbaren", "ih MÖH-te AJ-nen ter-MIN fer-AJN-ba-ren", "Chciałabym / chciałbym umówić wizytę"],
      ["smalltalk", "Wie geht's?", "wi gets", "Jak się masz?"],
      ["smalltalk", "Was machst du am Wochenende?", "was machst du am WO-chen-EN-de", "Co robisz w weekend?"],
      ["smalltalk", "Hast du Lust, ins Kino zu gehen?", "hast du lust, ins KI-no cu GE-en", "Masz ochotę pójść do kina?"],
      ["smalltalk", "Das Wetter ist heute schön", "das WE-ta ist HOJ-te szön", "Pogoda jest dziś ładna"],
      ["smalltalk", "Ich finde, dass das eine gute Idee ist", "ih FIN-de, das das AJ-ne GU-te i-DE ist", "Uważam, że to dobry pomysł"],
      ["smalltalk", "Das stimmt", "das sztimt", "Zgadza się"],
      ["smalltalk", "Wirklich? Das wusste ich nicht", "WIRK-lih? das WUS-te ih niht", "Naprawdę? Tego nie wiedziałem/am"],
      ["smalltalk", "Kein Problem", "kajn pro-BLEM", "Nie ma problemu"],
      ["smalltalk", "Lass uns einen Kaffee trinken!", "las uns AJ-nen KA-fe TRIN-ken", "Napijmy się kawy!"],
      ["smalltalk", "Schönen Tag noch!", "SZÖ-nen tak noh", "Miłego dnia!"],
      ["amt", "Ich habe ein Anliegen", "ih HA-be ajn AN-li-gen", "Mam sprawę do załatwienia"],
      ["amt", "Wofür ist diese Behörde zuständig?", "wo-FÜR ist DI-ze be-HÖR-de CU-sztendih", "Za co odpowiada ten urząd?"],
      ["amt", "Füllen Sie bitte das Formular aus", "FÜ-len zi BI-te das for-mu-LAR aus", "Proszę wypełnić formularz"],
      ["amt", "Bringen Sie bitte Ihren Ausweis mit", "BRIN-gen zi BI-te I-ren AUS-wajs mit", "Proszę przynieść dowód osobisty"],
      ["amt", "Unterschreiben Sie bitte hier", "un-ta-SZRAJ-ben zi BI-te hir", "Proszę podpisać tutaj"],
      ["amt", "Der Antrag wird geprüft", "der AN-trak wirt ge-PRÜFT", "Wniosek jest rozpatrywany"],
      ["amt", "Es fehlt noch eine Unterlage", "es felt noh AJ-ne UN-ta-LA-ge", "Brakuje jeszcze dokumentu"],
      ["amt", "Bis wann muss ich den Antrag stellen?", "bis wan mus ih den AN-trak SZTE-len", "Do kiedy muszę złożyć wniosek?"],
      ["amt", "Sie erhalten den Bescheid per Post", "zi er-HAL-ten den be-SZAJT per post", "Otrzyma Pan/Pani decyzję pocztą"],
      ["amt", "Haben Sie das verstanden?", "HA-ben zi das fer-SZTAN-den", "Czy to jest zrozumiałe?"],
      ["reise", "Wie ist das Wetter morgen?", "wi ist das WE-ta MOR-gen", "Jaka będzie jutro pogoda?"],
      ["reise", "Zwei Karten für Erwachsene, bitte", "cwaj KAR-ten für er-VAK-se-ne BI-te", "Poproszę dwa bilety dla dorosłych"],
      ["reise", "Ist das Frühstück inklusive?", "ist das FRÜ-sztük in-klu-ZI-we", "Czy śniadanie jest wliczone?"],
      ["reise", "Wann ist das Museum geöffnet?", "wan ist das mu-ZE-um ge-ÖF-net", "Kiedy muzeum jest otwarte?"],
      ["reise", "Können Sie ein Foto von uns machen?", "KÖ-nen zi ajn FO-to fon uns MA-chen", "Czy może Pan/Pani zrobić nam zdjęcie?"],
      ["reise", "Ich möchte die Buchung stornieren", "ih MÖH-te di BU-chung szto-NI-ren", "Chcę anulować rezerwację"]
    ]
  },

  units: [
    {
      id: "u1", lvl: "A1", tags: ["core"], title: "Hallo! Kim jesteś?", topic: "Przedstawianie się · sein (być)",
      intro: "Po niemiecku czasownik zawsze stoi na drugim miejscu w zdaniu. Najważniejszy jest „sein” (być) i zwrot „heißen” (nazywać się).",
      rules: [
        "<b>sein</b>: ich <b>bin</b>, du <b>bist</b>, er / sie / es <b>ist</b>, wir <b>sind</b>, ihr <b>seid</b>, sie / Sie <b>sind</b>.",
        "<b>Sie</b> (z dużej litery) = Pan / Pani, oficjalnie. <b>du</b> = ty, dla znajomych i rodziny.",
        "Imię: <b>Ich heiße Anna.</b> Pytanie: <b>Wie heißen Sie?</b> (Jak się Pan/Pani nazywa?)",
        "Skąd? <b>Woher kommen Sie? – Ich komme aus Polen.</b>",
        "Wszystkie rzeczowniki piszemy wielką literą: <b>der Mann, die Stadt</b>."
      ],
      ex: [
        ["Ich heiße Anna.", "ih HAJ-se A-na", "Nazywam się Anna."],
        ["Ich bin aus Polen.", "ih bin aus PO-len", "Jestem z Polski."],
        ["Wie heißen Sie?", "wi HAJ-sen zi", "Jak się Pan/Pani nazywa?"],
        ["Woher kommen Sie?", "wo-HER KO-men zi", "Skąd Pan/Pani pochodzi?"]
      ],
      words: [
        ["Hallo", "ha-LO", "cześć"], ["Guten Tag", "GU-ten tak", "dzień dobry"], ["Guten Abend", "GU-ten A-bent", "dobry wieczór"],
        ["Tschüss", "czüs", "cześć (pożegnanie)"], ["Auf Wiedersehen", "auf WI-da-ze-en", "do widzenia"], ["ja / nein", "ja / najn", "tak / nie"],
        ["bitte", "BI-te", "proszę"], ["danke", "DAN-ke", "dziękuję"], ["Entschuldigung", "ent-SZUL-di-gung", "przepraszam"],
        ["der Herr / die Frau", "der her / di frau", "Pan / Pani"], ["woher", "wo-HER", "skąd"], ["aus Polen", "aus PO-len", "z Polski"]
      ],
      drill: [
        ["Ich ___ Anna.", ["heiße", "heißt", "heißen"], 0, "ich → heiße"],
        ["Woher ___ Sie?", ["komme", "kommt", "kommen"], 2, "Sie (Pan/Pani) → kommen"],
        ["Er ___ Lehrer.", ["bin", "ist", "sind"], 1, "er → ist"],
        ["Wir ___ aus Polen.", ["bin", "ist", "sind"], 2, "wir → sind"],
        ["___ heißen Sie?", ["Wo", "Wie", "Was"], 1, "Jak się Pan nazywa → Wie"],
        ["Du ___ nett.", ["bist", "bin", "ist"], 0, "du → bist"]
      ],
      dialog: {
        title: "Pierwsze spotkanie",
        lines: [
          ["A", "Guten Tag! Ich heiße Thomas Weber. Und Sie?", "GU-ten tak! ih HAJ-se TO-mas WE-ba. unt zi", "Dzień dobry! Nazywam się Thomas Weber. A Pan/Pani?"],
          ["B", "Guten Tag, Herr Weber. Ich bin Anna Nowak.", "GU-ten tak, her WE-ba. ih bin A-na NO-wak", "Dzień dobry, panie Weber. Jestem Anna Nowak."],
          ["A", "Freut mich. Woher kommen Sie?", "frojt mih. wo-HER KO-men zi", "Miło mi. Skąd Pani pochodzi?"],
          ["B", "Ich komme aus Polen, aus Breslau.", "ih KO-me aus PO-len, aus BRES-lau", "Pochodzę z Polski, z Wrocławia."],
          ["A", "Ach, schön! Ich war schon in Breslau.", "ach, szön! ih war szon in BRES-lau", "Ach, ładnie! Byłem już we Wrocławiu."],
          ["B", "Vielen Dank. Auf Wiedersehen, Herr Weber!", "FI-len dank. auf WI-da-ze-en, her WE-ba", "Bardzo dziękuję. Do widzenia, panie Weber!"]
        ],
        qs: [
          ["Jak ma na imię mężczyzna?", ["Thomas", "Anna", "Peter"], 0],
          ["Skąd jest Anna?", ["Z Niemiec", "Z Polski", "Z Austrii"], 1],
          ["Z jakiego miasta pochodzi Anna?", ["Z Berlina", "Z Krakowa", "Z Wrocławia"], 2]
        ]
      }
    },
    {
      id: "u2", lvl: "A1", tags: ["core"], title: "Mein Alltag", topic: "Czasowniki w czasie teraźniejszym",
      intro: "Większość czasowników odmieniasz przez dodanie końcówek do rdzenia: arbeit-en → ich arbeit<b>e</b>. Zdanie: podmiot – czasownik – reszta.",
      rules: [
        "ich <b>-e</b>, du <b>-st</b>, er / sie / es <b>-t</b>, wir <b>-en</b>, ihr <b>-t</b>, sie / Sie <b>-en</b>.",
        "<b>Ich wohne in Polen. Er arbeitet im Büro.</b> (po „t / d” w rdzeniu dochodzi „e”: arbeitet).",
        "Pytanie bez słowa pytającego – czasownik na początek: <b>Arbeitest du hier?</b>",
        "Z pytajnikiem czasownik jest drugi: <b>Wo wohnst du? – Was machst du?</b>",
        "<b>Nicht</b> zaprzecza czasownik: <b>Ich arbeite nicht.</b>"
      ],
      ex: [
        ["Ich wohne in Polen.", "ih WO-ne in PO-len", "Mieszkam w Polsce."],
        ["Er arbeitet im Büro.", "er AR-baj-tet im BÜ-ro", "On pracuje w biurze."],
        ["Was machst du heute?", "was machst du HOJ-te", "Co robisz dzisiaj?"],
        ["Wir lernen Deutsch.", "wir LER-nen dojcz", "Uczymy się niemieckiego."]
      ],
      words: [
        ["wohnen", "WO-nen", "mieszkać"], ["arbeiten", "AR-baj-ten", "pracować"], ["lernen", "LER-nen", "uczyć się"],
        ["machen", "MA-chen", "robić"], ["kaufen", "KAU-fen", "kupować"], ["trinken", "TRIN-ken", "pić"],
        ["essen", "E-sen", "jeść"], ["spielen", "SZPI-len", "grać, bawić się"], ["das Haus", "das haus", "dom"],
        ["die Arbeit", "di AR-bajt", "praca"], ["heute", "HOJ-te", "dzisiaj"], ["morgen", "MOR-gen", "jutro / rano"]
      ],
      drill: [
        ["Ich ___ in Polen.", ["wohne", "wohnt", "wohnst"], 0, "ich → -e"],
        ["Du ___ viel.", ["arbeite", "arbeitest", "arbeiten"], 1, "du → -est (rdzeń kończy się na t)"],
        ["Er ___ Kaffee.", ["trinke", "trinkt", "trinken"], 1, "er → -t"],
        ["Wir ___ Deutsch.", ["lernt", "lerne", "lernen"], 2, "wir → -en"],
        ["Wo ___ du?", ["wohnst", "wohne", "wohnt"], 0, "du → -st"],
        ["Ich arbeite ___ am Sonntag.", ["nicht", "kein", "nie"], 0, "zaprzeczenie czasownika → nicht"]
      ],
      dialog: {
        title: "Rozmowa o dniu",
        lines: [
          ["A", "Was machst du heute, Anna?", "was machst du HOJ-te, A-na", "Co robisz dzisiaj, Anno?"],
          ["B", "Ich arbeite bis vier Uhr. Und du?", "ih AR-baj-te bis fir ua. unt du", "Pracuję do czwartej. A ty?"],
          ["A", "Ich lerne Deutsch und kaufe ein.", "ih LER-ne dojcz unt KAU-fe ajn", "Uczę się niemieckiego i robię zakupy."],
          ["B", "Wohnst du noch in Berlin?", "wonst du noh in ber-LIN", "Mieszkasz jeszcze w Berlinie?"],
          ["A", "Nein, ich wohne jetzt in Hamburg.", "najn, ih WO-ne jecst in HAM-burk", "Nie, teraz mieszkam w Hamburgu."],
          ["B", "Schön! Wir trinken morgen einen Kaffee.", "szön! wir TRIN-ken MOR-gen AJ-nen KA-fe", "Ładnie! Jutro wypijemy razem kawę."]
        ],
        qs: [
          ["Do której Anna pracuje?", ["Do trzeciej", "Do czwartej", "Do piątej"], 1],
          ["Co robi druga osoba dzisiaj?", ["Pracuje", "Śpi", "Uczy się i robi zakupy"], 2],
          ["Gdzie mieszka teraz rozmówca?", ["W Hamburgu", "W Berlinie", "W Monachium"], 0]
        ]
      }
    },
    {
      id: "u3", lvl: "A1", tags: ["core"], title: "Zahlen, Uhrzeit, Preise", topic: "Liczby, godziny i ceny",
      intro: "Liczby 1–20 trzeba znać na pamięć. Od 21 zaczyna się „odwrócona” kolejność: najpierw jedności, potem dziesiątki – 21 = einundzwanzig („jeden i dwadzieścia”).",
      rules: [
        "1 eins, 2 zwei, 3 drei, 4 vier, 5 fünf, 6 sechs, 7 sieben, 8 acht, 9 neun, 10 zehn.",
        "20 zwanzig, 30 dreißig, 40 vierzig, 50 fünfzig. <b>25 = fünfundzwanzig</b>.",
        "Cena: <b>Das kostet zehn Euro.</b> · Pytanie: <b>Wie viel kostet das?</b>",
        "Godzina: <b>Es ist drei Uhr.</b> · Pytanie: <b>Wie spät ist es?</b> · O której: <b>Um acht Uhr.</b>",
        "Pół do… po niemiecku: <b>halb vier</b> = 15:30 (pół do czwartej)."
      ],
      ex: [
        ["Das kostet zwölf Euro.", "das KOS-tet cwölf OJ-ro", "To kosztuje dwanaście euro."],
        ["Es ist halb vier.", "es ist halp fir", "Jest wpół do czwartej (15:30)."],
        ["Der Zug fährt um acht Uhr ab.", "der cuk fert um acht ua ap", "Pociąg odjeżdża o ósmej."],
        ["Ich bin fünfunddreißig Jahre alt.", "ih bin FÜNF-unt-draj-sih JA-re alt", "Mam trzydzieści pięć lat."]
      ],
      words: [
        ["eins, zwei, drei", "ajns, cwaj, draj", "jeden, dwa, trzy"], ["vier, fünf, sechs", "fir, fünf, zeks", "cztery, pięć, sześć"],
        ["sieben, acht, neun", "ZI-ben, acht, nojn", "siedem, osiem, dziewięć"], ["zehn", "cen", "dziesięć"],
        ["zwanzig", "CWAN-cih", "dwadzieścia"], ["hundert", "HUN-dert", "sto"], ["die Uhr", "di ua", "zegar / godzina"],
        ["die Stunde", "di SZTUN-de", "godzina (okres)"], ["der Euro", "der OJ-ro", "euro"], ["kosten", "KOS-ten", "kosztować"],
        ["teuer / billig", "TOJ-a / BI-lih", "drogi / tani"], ["früh / spät", "frü / szpet", "wcześnie / późno"]
      ],
      drill: [
        ["Das ___ zehn Euro.", ["kostet", "kosten", "kostest"], 0, "das → kostet"],
        ["Wie ___ ist es?", ["viel", "spät", "alt"], 1, "pytanie o godzinę → Wie spät"],
        ["Es ist ___ Uhr.", ["drei", "dreißig", "dritte"], 0, "godzina → drei Uhr"],
        ["Der Zug fährt ___ acht Uhr.", ["in", "um", "an"], 1, "o której → um"],
        ["fünf + vier = ___", ["sieben", "neun", "acht"], 1, "5 + 4 = 9 → neun"],
        ["Das ist zu ___. Es kostet 200 Euro!", ["billig", "teuer", "früh"], 1, "200 euro za dużo → teuer"]
      ],
      dialog: {
        title: "W sklepie",
        lines: [
          ["A", "Guten Tag. Wie viel kostet die Jacke?", "GU-ten tak. wi fil KOS-tet di JA-ke", "Dzień dobry. Ile kosztuje ta kurtka?"],
          ["B", "Die Jacke kostet neunundvierzig Euro.", "di JA-ke KOS-tet NOJN-unt-FIR-cih OJ-ro", "Kurtka kosztuje czterdzieści dziewięć euro."],
          ["A", "Das ist ein bisschen teuer.", "das ist ajn BIS-chen TOJ-a", "To trochę drogo."],
          ["B", "Diese hier kostet nur dreißig Euro.", "DI-ze hir KOS-tet nur DRAJ-sih OJ-ro", "Ta tutaj kosztuje tylko trzydzieści euro."],
          ["A", "Gut, die nehme ich. Wann machen Sie zu?", "gut, di NE-me ih. wan MA-chen zi cu", "Dobrze, tę wezmę. Kiedy zamykacie?"],
          ["B", "Um achtzehn Uhr.", "um ACH-cen ua", "O osiemnastej."]
        ],
        qs: [
          ["Ile kosztuje pierwsza kurtka?", ["29 euro", "39 euro", "49 euro"], 2],
          ["Ile kosztuje druga kurtka?", ["30 euro", "13 euro", "80 euro"], 0],
          ["O której sklep się zamyka?", ["O 8:00", "O 18:00", "O 16:00"], 1]
        ]
      }
    },
    {
      id: "u4", lvl: "A1", tags: ["dom", "life"], title: "Meine Familie", topic: "Rodzaje (der, die, das) · haben (mieć)",
      intro: "Każdy rzeczownik ma rodzaj: der (męski), die (żeński), das (nijaki). Zapamiętuj go razem ze słowem. Czasownik „haben” (mieć) jest równie ważny jak „sein”.",
      rules: [
        "<b>haben</b>: ich <b>habe</b>, du <b>hast</b>, er / sie / es <b>hat</b>, wir <b>haben</b>, ihr <b>habt</b>, sie / Sie <b>haben</b>.",
        "<b>der</b> Vater, <b>die</b> Mutter, <b>das</b> Kind. Liczba mnoga: <b>die</b> Kinder.",
        "„Mój / moja / moje”: <b>mein Vater, meine Mutter, mein Kind</b>. Przed żeńskim i mnogą dodajemy -e.",
        "Zaprzeczenie rzeczownika: <b>kein / keine</b>: <b>Ich habe keine Kinder.</b>",
        "Nieokreślony rodzajnik: <b>ein</b> (der, das) i <b>eine</b> (die): <b>Ich habe eine Schwester.</b>"
      ],
      ex: [
        ["Ich habe zwei Kinder.", "ih HA-be cwaj KIN-da", "Mam dwoje dzieci."],
        ["Das ist meine Mutter.", "das ist MAJ-ne MU-ta", "To jest moja mama."],
        ["Mein Mann arbeitet viel.", "majn man AR-baj-tet fil", "Mój mąż dużo pracuje."],
        ["Hast du Geschwister?", "hast du ge-SZWIS-ta", "Masz rodzeństwo?"]
      ],
      words: [
        ["die Familie", "di fa-MI-li-e", "rodzina"], ["der Vater / die Mutter", "der FA-ta / di MU-ta", "ojciec / matka"],
        ["der Mann / die Frau", "der man / di frau", "mąż, mężczyzna / żona, kobieta"], ["der Sohn / die Tochter", "der zon / di TOH-ta", "syn / córka"],
        ["das Kind", "das kint", "dziecko"], ["der Bruder / die Schwester", "der BRU-da / di SZWES-ta", "brat / siostra"],
        ["die Eltern", "di EL-tern", "rodzice"], ["die Oma / der Opa", "di O-ma / der O-pa", "babcia / dziadek"],
        ["der Freund / die Freundin", "der frojnt / di FROJN-din", "przyjaciel / przyjaciółka"], ["verheiratet", "fer-HAJ-ra-tet", "w związku małżeńskim"],
        ["das Haus / die Wohnung", "das haus / di WO-nung", "dom / mieszkanie"], ["der Hund / die Katze", "der hunt / di KA-ce", "pies / kot"]
      ],
      drill: [
        ["Ich ___ zwei Kinder.", ["bin", "habe", "hat"], 1, "mam → ich habe"],
        ["Das ist ___ Mutter. (moja)", ["mein", "meine", "meiner"], 1, "die Mutter → meine"],
        ["Er ___ einen Bruder.", ["habe", "hast", "hat"], 2, "er → hat"],
        ["Ich habe ___ Hund. (nie mam)", ["nicht", "kein", "keine"], 1, "der Hund → kein"],
        ["___ Kind spielt. (to dziecko)", ["Der", "Die", "Das"], 2, "das Kind"],
        ["Wir ___ eine Wohnung.", ["habe", "haben", "habt"], 1, "wir → haben"]
      ],
      dialog: {
        title: "O rodzinie",
        lines: [
          ["A", "Hast du Kinder, Anna?", "hast du KIN-da, A-na", "Masz dzieci, Anno?"],
          ["B", "Ja, ich habe eine Tochter und einen Sohn.", "ja, ih HA-be AJ-ne TOH-ta unt AJ-nen zon", "Tak, mam córkę i syna."],
          ["A", "Wie alt sind sie?", "wi alt zint zi", "Ile mają lat?"],
          ["B", "Meine Tochter ist acht, mein Sohn ist fünf.", "MAJ-ne TOH-ta ist acht, majn zon ist fünf", "Moja córka ma osiem lat, syn pięć."],
          ["A", "Und dein Mann?", "unt dajn man", "A twój mąż?"],
          ["B", "Er arbeitet viel, aber wir haben ein schönes Haus.", "er AR-baj-tet fil, A-ba wir HA-ben ajn SZÖ-nes haus", "Dużo pracuje, ale mamy ładny dom."]
        ],
        qs: [
          ["Ile dzieci ma Anna?", ["Jedno", "Dwoje", "Troje"], 1],
          ["Ile lat ma jej syn?", ["Pięć", "Osiem", "Dziesięć"], 0],
          ["Co mówi o mężu?", ["Że dużo pracuje", "Że jest chory", "Że mieszka gdzie indziej"], 0]
        ]
      }
    },
    {
      id: "u5", lvl: "A2", tags: ["jedzenie", "life", "trip"], title: "Im Restaurant und beim Einkaufen", topic: "möchten (chcieć) · biernik (den, die, das)",
      intro: "Grzecznie zamawiasz słowem „möchte” (chciałbym / chciałabym). Po „ich möchte” albo „ich nehme” rzecz, którą bierzesz, stoi w bierniku: der → <b>den</b>.",
      rules: [
        "<b>möchten</b>: ich <b>möchte</b>, du möchtest, er / sie <b>möchte</b>, wir <b>möchten</b>, Sie <b>möchten</b>.",
        "Biernik zmienia tylko rodzaj męski: der → <b>den</b>, ein → <b>einen</b>. Die i das zostają bez zmian.",
        "<b>Ich möchte einen Kaffee</b> (der Kaffee) · <b>eine Suppe</b> (die Suppe) · <b>ein Bier</b> (das Bier).",
        "Zamawianie: <b>Ich nehme… / Ich hätte gern… / Für mich bitte…</b>",
        "Rachunek: <b>Die Rechnung, bitte.</b> · <b>Zusammen oder getrennt?</b> (razem czy osobno?)"
      ],
      ex: [
        ["Ich möchte einen Kaffee, bitte.", "ih MÖH-te AJ-nen KA-fe BI-te", "Poproszę kawę."],
        ["Haben Sie einen Tisch für zwei Personen?", "HA-ben zi AJ-nen tisz für cwaj per-ZO-nen", "Czy jest stolik dla dwóch osób?"],
        ["Ich nehme die Suppe und das Wasser.", "ih NE-me di ZU-pe unt das WA-sa", "Wezmę zupę i wodę."],
        ["Die Rechnung, bitte.", "di REH-nung BI-te", "Poproszę rachunek."]
      ],
      words: [
        ["der Tisch", "der tisz", "stolik, stół"], ["die Speisekarte", "di SZPAJ-ze-KAR-te", "karta dań"], ["das Wasser", "das WA-sa", "woda"],
        ["der Kaffee", "der KA-fe", "kawa"], ["das Brot", "das brot", "chleb"], ["das Fleisch", "das flajsz", "mięso"],
        ["der Fisch", "der fisz", "ryba"], ["das Gemüse", "das ge-MÜ-ze", "warzywa"], ["die Rechnung", "di REH-nung", "rachunek"],
        ["das Trinkgeld", "das TRINK-gelt", "napiwek"], ["lecker", "LE-ka", "smaczny"], ["der Supermarkt", "der ZU-pa-markt", "supermarket"]
      ],
      drill: [
        ["Ich möchte ___ Kaffee. (der Kaffee)", ["der", "einen", "ein"], 1, "biernik, rodzaj męski → einen"],
        ["Ich nehme ___ Suppe. (die Suppe)", ["eine", "einen", "einem"], 0, "die → eine"],
        ["Wir ___ zwei Bier.", ["möchte", "möchten", "möchtest"], 1, "wir → möchten"],
        ["Die ___, bitte!", ["Rechnung", "Speisekarte", "Tisch"], 0, "prosisz o rachunek"],
        ["Haben Sie ___ Tisch für vier?", ["ein", "einen", "eine"], 1, "der Tisch → einen"],
        ["Das Essen war sehr ___.", ["teuer", "lecker", "früh"], 1, "jedzenie było smaczne → lecker"]
      ],
      dialog: {
        title: "W restauracji",
        lines: [
          ["A", "Guten Abend. Haben Sie einen Tisch für zwei?", "GU-ten A-bent. HA-ben zi AJ-nen tisz für cwaj", "Dobry wieczór. Czy jest stolik dla dwóch osób?"],
          ["B", "Ja, gern. Hier ist die Speisekarte.", "ja, gern. hir ist di SZPAJ-ze-KAR-te", "Tak, chętnie. Tu jest karta."],
          ["A", "Ich nehme das Schnitzel und einen Salat.", "ih NE-me das SZNI-cel unt AJ-nen za-LAT", "Wezmę sznycel i sałatkę."],
          ["B", "Und was möchten Sie trinken?", "unt was MÖH-ten zi TRIN-ken", "A co do picia?"],
          ["A", "Ein Wasser, bitte. Und später die Rechnung.", "ajn WA-sa, BI-te. unt SZPE-ta di REH-nung", "Wodę, proszę. A później rachunek."],
          ["B", "Natürlich. Guten Appetit!", "na-TÜR-lih. GU-ten a-pe-TIT", "Oczywiście. Smacznego!"]
        ],
        qs: [
          ["Dla ilu osób jest stolik?", ["Dla jednej", "Dla dwóch", "Dla czterech"], 1],
          ["Co zamawia gość?", ["Rybę", "Sznycel i sałatkę", "Zupę"], 1],
          ["Co będzie do picia?", ["Woda", "Kawa", "Piwo"], 0]
        ]
      }
    },
    {
      id: "u6", lvl: "A2", tags: ["trip"], title: "Im Hotel", topic: "Rezerwacja, pokój, „es gibt”",
      intro: "W hotelu potrzebujesz kilku stałych formuł. „Es gibt” znaczy „jest / są” i zawsze łączy się z biernikiem.",
      rules: [
        "<b>Ich habe ein Zimmer reserviert.</b> = Mam zarezerwowany pokój.",
        "<b>Haben Sie noch ein Zimmer frei?</b> = Czy macie jeszcze wolny pokój?",
        "<b>Es gibt einen Fahrstuhl / eine Dusche / ein Fenster.</b> (biernik: einen dla rodzaju męskiego).",
        "Przyimki czasu: <b>vom 5. bis zum 10. August</b> (od… do…), <b>für drei Nächte</b> (na trzy noce).",
        "Uprzejmie: <b>Könnten Sie mir helfen?</b> – Czy mogłby mi Pan pomóc?"
      ],
      ex: [
        ["Ich habe ein Zimmer reserviert.", "ih HA-be ajn CI-ma re-zer-WIRT", "Mam zarezerwowany pokój."],
        ["Gibt es hier ein Restaurant?", "gipt es hir ajn res-to-RANG", "Czy jest tu restauracja?"],
        ["Das Zimmer hat einen Balkon.", "das CI-ma hat AJ-nen bal-KONG", "Pokój ma balkon."],
        ["Wann ist das Frühstück?", "wan ist das FRÜ-sztük", "Kiedy jest śniadanie?"]
      ],
      words: [
        ["das Zimmer", "das CI-ma", "pokój"], ["das Einzelzimmer", "das AJN-cel-CI-ma", "pokój jednoosobowy"], ["das Doppelzimmer", "das DO-pel-CI-ma", "pokój dwuosobowy"],
        ["der Schlüssel", "der SZLÜ-sel", "klucz"], ["das Frühstück", "das FRÜ-sztük", "śniadanie"], ["die Nacht", "di nacht", "noc"],
        ["frei", "fraj", "wolny"], ["der Aufzug", "der AUF-cuk", "winda"], ["das WLAN", "das WE-lan", "wi-fi"],
        ["bezahlen", "be-CA-len", "płacić"], ["der Urlaub", "der UR-laup", "urlop, wakacje"], ["die Reservierung", "di re-zer-WI-rung", "rezerwacja"]
      ],
      drill: [
        ["Ich habe ein Zimmer ___.", ["reserviert", "reservieren", "reserviere"], 0, "mam zarezerwowany → reserviert"],
        ["Haben Sie noch ein Zimmer ___?", ["frei", "früh", "teuer"], 0, "wolny pokój → frei"],
        ["Es gibt ___ Balkon.", ["ein", "einen", "eine"], 1, "es gibt + biernik, der Balkon → einen"],
        ["Wir bleiben ___ drei Nächte.", ["für", "um", "auf"], 0, "na trzy noce → für"],
        ["Wann ist das ___?", ["Frühstück", "Schlüssel", "Aufzug"], 0, "kiedy jest śniadanie?"],
        ["___ Sie mir helfen?", ["Könnten", "Können", "Kann"], 0, "grzecznie: Könnten Sie…"]
      ],
      dialog: {
        title: "Przy recepcji",
        lines: [
          ["A", "Guten Tag. Ich habe ein Zimmer reserviert, auf den Namen Nowak.", "GU-ten tak. ih HA-be ajn CI-ma re-zer-WIRT, auf den NA-men NO-wak", "Dzień dobry. Mam rezerwację na nazwisko Nowak."],
          ["B", "Ja, Doppelzimmer für drei Nächte. Hier ist Ihr Schlüssel.", "ja, DO-pel-CI-ma für draj NEH-te. hir ist ir SZLÜ-sel", "Tak, pokój dwuosobowy na trzy noce. Oto klucz."],
          ["A", "Wann gibt es Frühstück?", "wan gipt es FRÜ-sztük", "Kiedy jest śniadanie?"],
          ["B", "Von sieben bis zehn Uhr im Restaurant.", "fon ZI-ben bis cen ua im res-to-RANG", "Od siódmej do dziesiątej w restauracji."],
          ["A", "Gibt es hier WLAN?", "gipt es hir WE-lan", "Czy jest tu wi-fi?"],
          ["B", "Ja, das Passwort steht auf der Karte.", "ja, das PAS-wort sztet auf der KAR-te", "Tak, hasło jest na karcie."]
        ],
        qs: [
          ["Na ile nocy jest rezerwacja?", ["Na jedną", "Na dwie", "Na trzy"], 2],
          ["Do której trwa śniadanie?", ["Do 9", "Do 10", "Do 11"], 1],
          ["Gdzie jest hasło do wi-fi?", ["Na karcie", "W pokoju", "Na kluczu"], 0]
        ]
      }
    },
    {
      id: "u7", lvl: "A2", tags: ["trip", "life"], title: "Unterwegs", topic: "Czasowniki modalne: können, müssen, wollen",
      intro: "Czasowniki modalne (móc, musieć, chcieć) mają specjalną zasadę: odmieniony modalny stoi na 2. miejscu, a drugi czasownik idzie na sam koniec w bezokoliczniku.",
      rules: [
        "<b>können</b> (móc, umieć): ich <b>kann</b>, du <b>kannst</b>, er <b>kann</b>, wir <b>können</b>.",
        "<b>müssen</b> (musieć): ich <b>muss</b>, du <b>musst</b>, wir <b>müssen</b>. <b>wollen</b> (chcieć): ich <b>will</b>, wir <b>wollen</b>.",
        "<b>Ich kann heute nicht kommen.</b> · <b>Wir müssen den Zug nehmen.</b> (nehmen na końcu).",
        "Droga: <b>geradeaus</b> (prosto), <b>links</b>, <b>rechts</b>. <b>Wie komme ich zum Bahnhof?</b>",
        "Podróż: <b>Wann fährt der Zug ab?</b> (ab-fahren – odjeżdżać, „ab” idzie na koniec)."
      ],
      ex: [
        ["Ich muss den Zug nehmen.", "ih mus den cuk NE-men", "Muszę jechać pociągiem."],
        ["Können Sie mir helfen?", "KÖ-nen zi mir HEL-fen", "Czy może mi Pan/Pani pomóc?"],
        ["Gehen Sie geradeaus und dann links.", "GE-en zi ge-RA-de-aus unt dan links", "Proszę iść prosto, potem w lewo."],
        ["Wann kommt der Bus an?", "wan komt der bus an", "Kiedy przyjeżdża autobus?"]
      ],
      words: [
        ["der Bahnhof", "der BAN-hof", "dworzec"], ["der Zug", "der cuk", "pociąg"], ["der Bus", "der bus", "autobus"],
        ["der Flughafen", "der FLUK-ha-fen", "lotnisko"], ["das Gleis", "das glajs", "peron, tor"], ["die Fahrkarte", "di FAR-kar-te", "bilet"],
        ["links / rechts", "links / rehts", "w lewo / w prawo"], ["geradeaus", "ge-RA-de-aus", "prosto"], ["der Koffer", "der KO-fa", "walizka"],
        ["die Haltestelle", "di HAL-te-SZTE-le", "przystanek"], ["Verspätung", "fer-SZPE-tung", "opóźnienie"], ["der Strand", "der sztrant", "plaża"]
      ],
      drill: [
        ["Ich ___ heute arbeiten.", ["muss", "musst", "müssen"], 0, "ich → muss"],
        ["Wir ___ nach Berlin fahren.", ["will", "wollen", "willst"], 1, "wir → wollen"],
        ["Ich ___ nicht kommen.", ["kann", "kannst", "können"], 0, "ich → kann"],
        ["Der Bahnhof ist ___. (prosto)", ["links", "geradeaus", "rechts"], 1, "prosto → geradeaus"],
        ["Der Zug fährt um acht Uhr ___.", ["an", "ab", "auf"], 1, "odjeżdża → ab"],
        ["Ich muss einen Koffer ___. (kupić)", ["kaufe", "gekauft", "kaufen"], 2, "po modalnym → bezokolicznik na końcu"]
      ],
      dialog: {
        title: "Na dworcu",
        lines: [
          ["A", "Entschuldigung, wie komme ich zum Flughafen?", "ent-SZUL-di-gung, wi KO-me ih cum FLUK-ha-fen", "Przepraszam, jak dojadę na lotnisko?"],
          ["B", "Sie müssen die S-Bahn nehmen, Linie 8.", "zi MÜ-sen di ES-ban NE-men, LI-ni-e acht", "Musi Pan/Pani pojechać S-Bahn, linią 8."],
          ["A", "Wann fährt der nächste Zug ab?", "wan fert der NEHS-te cuk ap", "Kiedy odjeżdża następny pociąg?"],
          ["B", "In zehn Minuten, von Gleis drei.", "in cen mi-NU-ten, fon glajs draj", "Za dziesięć minut, z peronu trzeciego."],
          ["A", "Wie lange dauert die Fahrt?", "wi LAN-ge DAU-ert di fart", "Jak długo trwa przejazd?"],
          ["B", "Ungefähr zwanzig Minuten.", "UN-ge-fer CWAN-cih mi-NU-ten", "Około dwudziestu minut."]
        ],
        qs: [
          ["Czym trzeba jechać?", ["Autobusem", "Linią S-Bahn 8", "Taksówką"], 1],
          ["Z którego peronu odjeżdża pociąg?", ["Z pierwszego", "Z trzeciego", "Z piątego"], 1],
          ["Ile trwa podróż?", ["10 minut", "20 minut", "40 minut"], 1]
        ]
      }
    },
    {
      id: "u8", lvl: "A2", tags: ["life", "dom"], title: "Beim Arzt", topic: "Ciało, ból, „mir tut … weh” (celownik)",
      intro: "U lekarza mówisz, co Cię boli. Zwrot „mir tut der Kopf weh” używa celownika „mir” (mnie). Drugi sposób: „ich habe … schmerzen”.",
      rules: [
        "<b>Ich habe Kopfschmerzen / Bauchschmerzen / Halsschmerzen.</b> (boli mnie głowa / brzuch / gardło).",
        "<b>Mir tut der Rücken weh.</b> = Boli mnie plecy. <b>mir</b> = mnie (celownik od ich).",
        "Wizyta: <b>Ich möchte einen Termin vereinbaren.</b> · <b>Ich habe einen Termin um zehn Uhr.</b>",
        "Od kiedy? <b>Seit drei Tagen.</b> (od trzech dni) · <b>Seit gestern.</b>",
        "Lekarz zapyta: <b>Was fehlt Ihnen?</b> · <b>Seit wann haben Sie das?</b>"
      ],
      ex: [
        ["Ich habe Kopfschmerzen.", "ih HA-be KOPF-szmer-cen", "Boli mnie głowa."],
        ["Mir tut der Rücken weh.", "mir tut der RÜ-ken we", "Bolą mnie plecy."],
        ["Seit drei Tagen habe ich Fieber.", "zajt draj TA-gen HA-be ih FI-ba", "Od trzech dni mam gorączkę."],
        ["Ich brauche ein Rezept.", "ih BRAU-che ajn re-CEPT", "Potrzebuję recepty."]
      ],
      words: [
        ["der Arzt / die Ärztin", "der arct / di ERCT-in", "lekarz / lekarka"], ["der Kopf", "der kopf", "głowa"], ["der Bauch", "der bauch", "brzuch"],
        ["der Rücken", "der RÜ-ken", "plecy"], ["der Hals", "der hals", "gardło, szyja"], ["das Fieber", "das FI-ba", "gorączka"],
        ["die Schmerzen", "di SZMER-cen", "ból"], ["krank", "krank", "chory"], ["das Medikament", "das me-di-ka-MENT", "lek"],
        ["die Apotheke", "di a-po-TE-ke", "apteka"], ["das Rezept", "das re-CEPT", "recepta"], ["der Termin", "der ter-MIN", "wizyta, termin"]
      ],
      drill: [
        ["Ich habe ___.", ["Kopfschmerzen", "Kopfschmerz", "Kopf"], 0, "boli mnie głowa → Kopfschmerzen"],
        ["___ tut der Rücken weh.", ["Ich", "Mir", "Mich"], 1, "boli mnie → mir"],
        ["Ich habe ___ drei Tagen Fieber.", ["seit", "vor", "in"], 0, "od trzech dni → seit"],
        ["Ich möchte einen ___ vereinbaren.", ["Termin", "Rezept", "Fieber"], 0, "umówić wizytę → Termin"],
        ["Ich bin ___. Ich bleibe im Bett.", ["krank", "teuer", "früh"], 0, "chory → krank"],
        ["Ich brauche ein ___ aus der Apotheke.", ["Rezept", "Schlüssel", "Koffer"], 0, "recepta"]
      ],
      dialog: {
        title: "W gabinecie",
        lines: [
          ["A", "Guten Tag. Was fehlt Ihnen?", "GU-ten tak. was felt I-nen", "Dzień dobry. Co Panu/Pani dolega?"],
          ["B", "Ich habe Halsschmerzen und Fieber.", "ih HA-be HALS-szmer-cen unt FI-ba", "Boli mnie gardło i mam gorączkę."],
          ["A", "Seit wann haben Sie das?", "zajt wan HA-ben zi das", "Od kiedy Pan/Pani to ma?"],
          ["B", "Seit zwei Tagen. Mir tut auch der Kopf weh.", "zajt cwaj TA-gen. mir tut auch der kopf we", "Od dwóch dni. Boli mnie też głowa."],
          ["A", "Sie brauchen Ruhe. Ich schreibe Ihnen ein Rezept.", "zi BRAU-chen RU-e. ih SZRAJ-be I-nen ajn re-CEPT", "Potrzebuje Pan/Pani odpoczynku. Wypiszę receptę."],
          ["B", "Vielen Dank, Herr Doktor.", "FI-len dank, her DOK-tor", "Bardzo dziękuję, panie doktorze."]
        ],
        qs: [
          ["Co dolega pacjentowi?", ["Ból gardła i gorączka", "Ból pleców", "Złamana noga"], 0],
          ["Od kiedy to trwa?", ["Od dwóch dni", "Od tygodnia", "Od wczoraj"], 0],
          ["Co dostaje pacjent?", ["Zwolnienie", "Receptę", "Skierowanie"], 1]
        ]
      }
    },
    {
      id: "u9", lvl: "A2", tags: ["klienci", "biuro", "zagranica", "magazyn"], title: "Am Telefon", topic: "Czasowniki rozdzielne (anrufen, zurückrufen)",
      intro: "W rozmowach telefonicznych używasz dużo czasowników rozdzielnych: przedrostek odpada i trafia na koniec zdania. „anrufen” → „Ich rufe Sie an.”",
      rules: [
        "<b>anrufen</b>: <b>Ich rufe Sie morgen an.</b> (zadzwonię do Pana/Pani jutro).",
        "<b>zurückrufen</b>: <b>Ich rufe Sie zurück.</b> · <b>aufstehen</b>: <b>Ich stehe um sechs Uhr auf.</b>",
        "Przedstawienie się: <b>Hier spricht Maria Nowak von der Firma ABC.</b>",
        "Prośba: <b>Kann ich bitte Herrn Müller sprechen?</b> · <b>Ist Frau Schmidt da?</b>",
        "Brak osoby: <b>Er ist leider nicht da.</b> · <b>Möchten Sie eine Nachricht hinterlassen?</b>"
      ],
      ex: [
        ["Hier spricht Maria Nowak.", "hir szpriht ma-RI-a NO-wak", "Mówi Maria Nowak."],
        ["Ich rufe Sie morgen an.", "ih RU-fe zi MOR-gen an", "Zadzwonię do Pana/Pani jutro."],
        ["Er ist leider nicht da.", "er ist LAJ-da niht da", "Niestety nie ma go."],
        ["Können Sie das bitte wiederholen?", "KÖ-nen zi das BI-te WI-da-HO-len", "Czy może Pan/Pani to powtórzyć?"]
      ],
      words: [
        ["anrufen", "AN-ru-fen", "dzwonić do kogoś"], ["zurückrufen", "cu-RÜK-ru-fen", "oddzwonić"], ["die Nummer", "di NU-ma", "numer"],
        ["die Nachricht", "di NACH-riht", "wiadomość"], ["verbinden", "fer-BIN-den", "połączyć"], ["besetzt", "be-ZECT", "zajęty"],
        ["erreichen", "er-RAJ-chen", "dodzwonić się"], ["der Termin", "der ter-MIN", "termin, spotkanie"], ["die Firma", "di FIR-ma", "firma"],
        ["leider", "LAJ-da", "niestety"], ["gleich", "glajh", "zaraz"], ["buchstabieren", "buch-sztha-BI-ren", "przeliterować"]
      ],
      drill: [
        ["Ich rufe Sie morgen ___. (anrufen)", ["an", "auf", "zu"], 0, "przedrostek an idzie na koniec"],
        ["Ich rufe Sie gleich ___. (zurückrufen)", ["zurück", "an", "auf"], 0, "zurück na koniec"],
        ["___ spricht Maria Nowak.", ["Hier", "Dort", "Wo"], 0, "przedstawiasz się: Hier spricht…"],
        ["Herr Müller ist ___ nicht da.", ["leider", "gleich", "früh"], 0, "niestety → leider"],
        ["Können Sie das ___?", ["wiederholen", "wiederhole", "wiederholt"], 0, "po können → bezokolicznik"],
        ["Die Leitung ist ___.", ["besetzt", "billig", "lecker"], 0, "linia zajęta → besetzt"]
      ],
      dialog: {
        title: "Telefon do firmy",
        lines: [
          ["A", "Firma Schneider, guten Tag!", "FIR-ma SZNAJ-da, GU-ten tak", "Firma Schneider, dzień dobry!"],
          ["B", "Guten Tag, hier spricht Maria Nowak. Kann ich bitte Herrn Müller sprechen?", "GU-ten tak, hir szpriht ma-RI-a NO-wak. kan ih BI-te hern MÜ-la SZPRE-chen", "Dzień dobry, mówi Maria Nowak. Czy mogę prosić pana Müllera?"],
          ["A", "Er ist leider nicht da. Möchten Sie eine Nachricht hinterlassen?", "er ist LAJ-da niht da. MÖH-ten zi AJ-ne NACH-riht hin-ta-LA-sen", "Niestety nie ma go. Czy chce Pani zostawić wiadomość?"],
          ["B", "Nein, danke. Ich rufe morgen noch einmal an.", "najn, DAN-ke. ih RU-fe MOR-gen noh AJN-mal an", "Nie, dziękuję. Zadzwonię jeszcze raz jutro."],
          ["A", "Gut, dann sage ich es ihm.", "gut, dan ZA-ge ih es im", "Dobrze, to mu przekażę."],
          ["B", "Vielen Dank. Auf Wiederhören!", "FI-len dank. auf WI-da-HÖ-ren", "Bardzo dziękuję. Do usłyszenia!"]
        ],
        qs: [
          ["Kogo chce Maria?", ["Pana Schneidera", "Pana Müllera", "Panią Schmidt"], 1],
          ["Dlaczego nie rozmawia?", ["Linia zajęta", "Nie ma go", "Jest chory"], 1],
          ["Co robi Maria?", ["Zostawia numer", "Zadzwoni jutro", "Wysyła maila"], 1]
        ]
      }
    },
    {
      id: "u10", lvl: "A2", tags: ["core"], title: "Was ich gemacht habe", topic: "Przeszłość – Perfekt (haben/sein + Partizip II)",
      intro: "Rozmawiając o przeszłości, Niemcy najczęściej używają Perfekt: haben (lub sein) + imiesłów (Partizip II) na końcu zdania.",
      rules: [
        "Większość czasowników: <b>haben</b> + ge-…-t: <b>Ich habe gearbeitet.</b> (arbeiten → gearbeitet).",
        "Czasowniki ruchu i zmiany: <b>sein</b> + Partizip: <b>Ich bin nach Berlin gefahren.</b>",
        "Nieregularne: machen → <b>gemacht</b>, sehen → <b>gesehen</b>, essen → <b>gegessen</b>, schreiben → <b>geschrieben</b>.",
        "Partizip zawsze na końcu: <b>Gestern habe ich Deutsch gelernt.</b>",
        "<b>Gestern, letzte Woche, vor zwei Tagen</b> – słowa czasu często stoją na początku."
      ],
      ex: [
        ["Gestern habe ich gearbeitet.", "GES-tern HA-be ih ge-AR-baj-tet", "Wczoraj pracowałem/am."],
        ["Wir sind nach Berlin gefahren.", "wir zint nach ber-LIN ge-FA-ren", "Pojechaliśmy do Berlina."],
        ["Was hast du am Wochenende gemacht?", "was hast du am WO-chen-EN-de ge-MACHT", "Co robiłeś/aś w weekend?"],
        ["Ich habe eine E-Mail geschrieben.", "ih HA-be AJ-ne I-mejl ge-SZRI-ben", "Napisałem/am maila."]
      ],
      words: [
        ["gestern", "GES-tern", "wczoraj"], ["letzte Woche", "LEC-te WO-che", "w zeszłym tygodniu"], ["das Wochenende", "das WO-chen-EN-de", "weekend"],
        ["gemacht", "ge-MACHT", "zrobiony (od machen)"], ["gearbeitet", "ge-AR-baj-tet", "pracował (od arbeiten)"], ["gelernt", "ge-LERNT", "uczył się"],
        ["gefahren", "ge-FA-ren", "pojechał (od fahren)"], ["gegessen", "ge-GE-sen", "zjadł"], ["gesehen", "ge-ZE-en", "widział"],
        ["geschrieben", "ge-SZRI-ben", "napisał"], ["gekauft", "ge-KAUFT", "kupił"], ["schon / noch nicht", "szon / noh niht", "już / jeszcze nie"]
      ],
      drill: [
        ["Gestern ___ ich gearbeitet.", ["bin", "habe", "hat"], 1, "arbeiten → haben"],
        ["Wir ___ nach Berlin gefahren.", ["haben", "sind", "ist"], 1, "fahren (ruch) → sein"],
        ["Ich habe Deutsch ___.", ["gelernt", "lernen", "lernt"], 0, "Partizip II → gelernt"],
        ["Was hast du gestern ___?", ["machen", "gemacht", "macht"], 1, "machen → gemacht"],
        ["Er ___ einen Brief geschrieben.", ["hat", "ist", "habe"], 0, "er → hat"],
        ["Ich habe das noch ___ gesehen.", ["nicht", "kein", "nie"], 0, "jeszcze nie → noch nicht"]
      ],
      dialog: {
        title: "Co robiłeś w weekend?",
        lines: [
          ["A", "Hallo Anna! Was hast du am Wochenende gemacht?", "ha-LO A-na! was hast du am WO-chen-EN-de ge-MACHT", "Cześć Anno! Co robiłaś w weekend?"],
          ["B", "Ich bin nach Dresden gefahren.", "ih bin nach DRES-den ge-FA-ren", "Pojechałam do Drezna."],
          ["A", "Toll! Was hast du dort gesehen?", "tol! was hast du dort ge-ZE-en", "Super! Co tam widziałaś?"],
          ["B", "Viele schöne Gebäude, und ich habe gut gegessen.", "FI-le SZÖ-ne ge-BOJ-de, unt ih HA-be gut ge-GE-sen", "Dużo pięknych budynków i dobrze jadłam."],
          ["A", "Hast du auch etwas gekauft?", "hast du auch ET-was ge-KAUFT", "Kupiłaś też coś?"],
          ["B", "Ja, ein Geschenk für meine Mutter.", "ja, ajn ge-SZENK für MAJ-ne MU-ta", "Tak, prezent dla mamy."]
        ],
        qs: [
          ["Dokąd pojechała Anna?", ["Do Berlina", "Do Drezna", "Do Monachium"], 1],
          ["Co robiła na miejscu?", ["Zwiedzała i jadła", "Pracowała", "Spała"], 0],
          ["Dla kogo kupiła prezent?", ["Dla męża", "Dla mamy", "Dla siostry"], 1]
        ]
      }
    },
    {
      id: "u11", lvl: "B1", tags: ["biuro", "klienci"], title: "E-Mail und Termine", topic: "Grzeczne prośby – Konjunktiv II (könnten Sie…, hätten Sie…)",
      intro: "W mailach i w pracy prosisz uprzejmie formami „könnten Sie” i „würden Sie”. To Konjunktiv II – brzmi dużo milej niż rozkaz.",
      rules: [
        "<b>Könnten Sie mir bitte das Angebot schicken?</b> – Czy mógłby mi Pan przesłać ofertę?",
        "<b>Würden Sie bitte zurückrufen?</b> · <b>Ich hätte gern einen Termin.</b> (hätte = chciałbym mieć).",
        "Początek maila: <b>Sehr geehrte Frau Schmidt,</b> · koniec: <b>Mit freundlichen Grüßen</b>.",
        "Załącznik: <b>Anbei finden Sie…</b> · Termin: <b>Hätten Sie am Dienstag Zeit?</b>",
        "Odmowa: <b>Leider kann ich am Montag nicht. Passt Ihnen Mittwoch?</b>"
      ],
      ex: [
        ["Könnten Sie mir bitte das Angebot schicken?", "KÖN-ten zi mir BI-te das AN-ge-bot SZI-ken", "Czy mógłby/mogłaby Pan/Pani przesłać mi ofertę?"],
        ["Hätten Sie am Dienstag Zeit?", "HE-ten zi am DINS-tak cajt", "Czy miałby/miałaby Pan/Pani czas we wtorek?"],
        ["Anbei finden Sie die Unterlagen.", "AN-baj FIN-den zi di UN-ta-LA-gen", "W załączniku znajdzie Pan/Pani dokumenty."],
        ["Passt Ihnen Mittwoch um zehn Uhr?", "past I-nen MIT-woch um cen ua", "Czy środa o dziesiątej Panu/Pani odpowiada?"]
      ],
      words: [
        ["das Angebot", "das AN-ge-bot", "oferta"], ["die Unterlagen", "di UN-ta-LA-gen", "dokumenty"], ["der Anhang", "der AN-hang", "załącznik"],
        ["die Besprechung", "di be-SZPRE-chung", "spotkanie, narada"], ["verschieben", "fer-SZI-ben", "przełożyć"], ["bestätigen", "be-SZTE-ti-gen", "potwierdzić"],
        ["die Frist", "di frist", "termin (ostateczny)"], ["dringend", "DRIN-gent", "pilny"], ["die Rechnung", "di REH-nung", "faktura"],
        ["der Vertrag", "der fer-TRAK", "umowa"], ["zusagen / absagen", "CU-za-gen / AP-za-gen", "przyjąć / odwołać"], ["Rückmeldung", "RÜK-mel-dung", "odpowiedź zwrotna"]
      ],
      drill: [
        ["___ Sie mir bitte helfen?", ["Könnten", "Kann", "Konnte"], 0, "grzecznie → Könnten"],
        ["___ Sie am Dienstag Zeit?", ["Haben", "Hätten", "Hatten"], 1, "uprzejmie → Hätten"],
        ["Sehr ___ Frau Schmidt,", ["geehrte", "gute", "liebe"], 0, "formalny początek maila"],
        ["Mit freundlichen ___", ["Grüßen", "Tagen", "Danken"], 0, "Mit freundlichen Grüßen"],
        ["___ finden Sie die Rechnung.", ["Anbei", "Dort", "Dann"], 0, "w załączniku → Anbei"],
        ["Leider muss ich den Termin ___.", ["verschieben", "verschiebt", "verschoben"], 0, "po muss → bezokolicznik"]
      ],
      dialog: {
        title: "Umawianie terminu",
        lines: [
          ["A", "Guten Morgen, Frau Nowak. Hätten Sie diese Woche Zeit für ein Treffen?", "GU-ten MOR-gen, frau NO-wak. HE-ten zi DI-ze WO-che cajt für ajn TRE-fen", "Dzień dobry, pani Nowak. Czy miałaby Pani w tym tygodniu czas na spotkanie?"],
          ["B", "Am Montag kann ich leider nicht. Passt Ihnen Mittwoch?", "am MON-tak kan ih LAJ-da niht. past I-nen MIT-woch", "W poniedziałek niestety nie mogę. Czy środa Panu odpowiada?"],
          ["A", "Mittwoch ist gut. Um zehn Uhr?", "MIT-woch ist gut. um cen ua", "Środa jest dobra. O dziesiątej?"],
          ["B", "Ja, perfekt. Könnten Sie mir vorher das Angebot schicken?", "ja, per-FEKT. KÖN-ten zi mir for-HER das AN-ge-bot SZI-ken", "Tak, świetnie. Czy mógłby Pan wcześniej przesłać mi ofertę?"],
          ["A", "Natürlich. Ich schicke es heute noch per E-Mail.", "na-TÜR-lih. ih SZI-ke es HOJ-te noh per I-mejl", "Oczywiście. Wyślę je jeszcze dzisiaj mailem."],
          ["B", "Vielen Dank. Dann bis Mittwoch!", "FI-len dank. dan bis MIT-woch", "Dziękuję. W takim razie do środy!"]
        ],
        qs: [
          ["Który dzień wybrali?", ["Poniedziałek", "Środę", "Piątek"], 1],
          ["O której godzinie?", ["O 10:00", "O 8:00", "O 14:00"], 0],
          ["Co ma wysłać mężczyzna?", ["Fakturę", "Ofertę", "Umowę"], 1]
        ]
      }
    },
    {
      id: "u12", lvl: "B1", tags: ["klienci"], title: "Kunden beraten, Reklamation", topic: "Zdania podrzędne: weil, dass, wenn, ob",
      intro: "W zdaniach z „weil / dass / wenn / ob” odmieniony czasownik ląduje na samym końcu zdania podrzędnego: „Ich komme nicht, weil ich krank <b>bin</b>.”",
      rules: [
        "<b>weil</b> (ponieważ): <b>Wir liefern später, weil das Produkt fehlt.</b>",
        "<b>dass</b> (że): <b>Ich denke, dass der Preis gut ist.</b> · <b>wenn</b> (jeśli / kiedy): <b>Wenn Sie wollen, schicke ich es heute.</b>",
        "<b>ob</b> (czy, w mowie zależnej): <b>Ich weiß nicht, ob er kommt.</b>",
        "Zdanie podrzędne przed głównym: czasownik główny od razu po przecinku: <b>Wenn Sie Zeit haben, rufen Sie an.</b>",
        "Reklamacja: <b>Das Produkt ist kaputt.</b> · <b>Ich möchte mich beschweren.</b> · <b>Wir tauschen es um.</b>"
      ],
      ex: [
        ["Ich rufe an, weil das Paket fehlt.", "ih RU-fe an, wajl das PA-ket felt", "Dzwonię, bo brakuje paczki."],
        ["Wir denken, dass der Preis fair ist.", "wir DEN-ken, das der prajs fer ist", "Uważamy, że cena jest uczciwa."],
        ["Wenn Sie wollen, schicke ich es sofort.", "wen zi WO-len, SZI-ke ih es zo-FORT", "Jeśli Pan/Pani chce, wyślę od razu."],
        ["Ich weiß nicht, ob das möglich ist.", "ih wajs niht, op das MÖK-lih ist", "Nie wiem, czy to możliwe."]
      ],
      words: [
        ["die Reklamation", "di re-kla-ma-CJON", "reklamacja"], ["kaputt", "ka-PUT", "zepsuty"], ["der Schaden", "der SZA-den", "szkoda, uszkodzenie"],
        ["die Lieferung", "di LI-fe-rung", "dostawa"], ["die Verspätung", "di fer-SZPE-tung", "opóźnienie"], ["umtauschen", "UM-tau-szen", "wymienić"],
        ["erstatten", "er-SZTA-ten", "zwrócić (pieniądze)"], ["sich beschweren", "zih be-SZWE-ren", "składać skargę"], ["die Garantie", "di ga-ran-TI", "gwarancja"],
        ["der Preis", "der prajs", "cena"], ["der Rabatt", "der ra-BAT", "rabat"], ["zufrieden", "cu-FRI-den", "zadowolony"]
      ],
      drill: [
        ["Ich rufe an, ___ das Paket fehlt.", ["weil", "dass", "ob"], 0, "powód → weil"],
        ["Ich denke, ___ der Preis gut ist.", ["ob", "dass", "wenn"], 1, "myślę, że → dass"],
        ["Ich weiß nicht, ___ er kommt.", ["ob", "dass", "weil"], 0, "czy → ob"],
        ["Wenn Sie Zeit ___, rufen Sie an.", ["haben", "hat", "habe"], 0, "Sie → haben (na końcu)"],
        ["Das Produkt ist ___.", ["kaputt", "teuer", "zufrieden"], 0, "zepsuty → kaputt"],
        ["Wir ___ das Produkt um.", ["tauschen", "kaufen", "bleiben"], 0, "wymieniamy → tauschen … um"]
      ],
      dialog: {
        title: "Reklamacja",
        lines: [
          ["A", "Guten Tag, ich möchte mich beschweren. Das Paket ist beschädigt angekommen.", "GU-ten tak, ih MÖH-te mih be-SZWE-ren. das PA-ket ist be-SZE-digt AN-ge-ko-men", "Dzień dobry, chcę złożyć skargę. Paczka dotarła uszkodzona."],
          ["B", "Das tut mir leid. Wissen Sie, wann Sie es bestellt haben?", "das tut mir lajt. WI-sen zi, wan zi es be-SZTELT HA-ben", "Bardzo mi przykro. Czy wie Pan/Pani, kiedy zamówiono?"],
          ["A", "Letzte Woche, am Dienstag. Ich möchte mein Geld zurück, weil ich es dringend brauche.", "LEC-te WO-che, am DINS-tak. ih MÖH-te majn gelt cu-RÜK, wajl ih es DRIN-gent BRAU-che", "W zeszłym tygodniu, we wtorek. Chcę zwrotu pieniędzy, bo bardzo tego potrzebuję."],
          ["B", "Wir können es umtauschen, oder wir erstatten den Betrag.", "wir KÖ-nen es UM-tau-szen, O-da wir er-SZTA-ten den be-TRAK", "Możemy wymienić albo zwrócić kwotę."],
          ["A", "Dann bitte die Erstattung.", "dan BI-te di er-SZTA-tung", "To poproszę o zwrot."],
          ["B", "Gern. Ich bearbeite das sofort.", "gern. ih be-AR-baj-te das zo-FORT", "Chętnie. Załatwię to od razu."]
        ],
        qs: [
          ["Co jest nie tak z paczką?", ["Spóźniła się", "Jest uszkodzona", "Jest za mała"], 1],
          ["Co wybiera klient?", ["Wymianę", "Zwrot pieniędzy", "Rabat"], 1],
          ["Kiedy firma to załatwi?", ["Od razu", "Za tydzień", "Jutro"], 0]
        ]
      }
    },
    {
      id: "u13", lvl: "B1", tags: ["zagranica", "magazyn"], title: "Arbeit in Deutschland", topic: "Rozmowa o pracę, umowa, bezpieczeństwo",
      intro: "Na rozmowie kwalifikacyjnej i w pierwszych dniach pracy usłyszysz stałe pytania i polecenia. Uczysz się ich na pamięć razem z czasownikami i zdaniami z „weil / dass”.",
      rules: [
        "Rozmowa: <b>Welche Erfahrung haben Sie?</b> · <b>Ich habe drei Jahre im Lager gearbeitet.</b>",
        "Dostępność: <b>Ich kann sofort anfangen.</b> · <b>Ich arbeite gern im Team.</b>",
        "Umowa: <b>Der Vertrag ist befristet / unbefristet.</b> · <b>Wie hoch ist der Stundenlohn?</b>",
        "BHP: <b>Bitte tragen Sie Schutzkleidung.</b> · <b>Das ist verboten.</b> · <b>Vorsicht!</b>",
        "Prośba o pomoc: <b>Ich habe das nicht verstanden. Können Sie es mir zeigen?</b>"
      ],
      ex: [
        ["Ich habe drei Jahre im Lager gearbeitet.", "ih HA-be draj JA-re im LA-ga ge-AR-baj-tet", "Pracowałem/am trzy lata w magazynie."],
        ["Wie hoch ist der Stundenlohn?", "wi hoh ist der SZTUN-den-lon", "Jaka jest stawka godzinowa?"],
        ["Bitte tragen Sie die Schutzkleidung.", "BI-te TRA-gen zi di SZUC-klaj-dung", "Proszę nosić odzież ochronną."],
        ["Ich kann sofort anfangen.", "ih kan zo-FORT AN-fan-gen", "Mogę zacząć od razu."]
      ],
      words: [
        ["die Bewerbung", "di be-WER-bung", "podanie o pracę"], ["das Vorstellungsgespräch", "das FOR-sztel-lungs-ge-SZPREH", "rozmowa kwalifikacyjna"], ["die Erfahrung", "di er-FA-rung", "doświadczenie"],
        ["der Vertrag", "der fer-TRAK", "umowa"], ["der Stundenlohn", "der SZTUN-den-lon", "stawka godzinowa"], ["die Schicht", "di sziht", "zmiana"],
        ["das Lager", "das LA-ga", "magazyn"], ["der Gabelstapler", "der GA-bel-SZTA-pla", "wózek widłowy"], ["die Schutzkleidung", "di SZUC-klaj-dung", "odzież ochronna"],
        ["der Kollege / die Kollegin", "der ko-LE-ge / di ko-LE-gin", "kolega / koleżanka z pracy"], ["der Chef / die Chefin", "der szef / di SZE-fin", "szef / szefowa"], ["der Urlaub", "der UR-laup", "urlop"]
      ],
      drill: [
        ["Ich habe drei Jahre im Lager ___.", ["gearbeitet", "arbeiten", "arbeitet"], 0, "Perfekt → gearbeitet"],
        ["Wie hoch ist der ___?", ["Stundenlohn", "Schicht", "Kollege"], 0, "stawka godzinowa"],
        ["Ich kann ___ anfangen.", ["sofort", "gestern", "nie"], 0, "mogę zacząć od razu → sofort"],
        ["Bitte tragen Sie ___.", ["Schutzkleidung", "Urlaub", "Vertrag"], 0, "odzież ochronna"],
        ["Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.", ["weil", "ob", "dass"], 0, "powód → weil"],
        ["Ich habe das nicht ___. Können Sie es zeigen?", ["verstanden", "verstehen", "versteht"], 0, "nie zrozumiałem → verstanden"]
      ],
      dialog: {
        title: "Rozmowa kwalifikacyjna",
        lines: [
          ["A", "Guten Tag, Frau Nowak. Welche Erfahrung haben Sie im Lager?", "GU-ten tak, frau NO-wak. WEL-he er-FA-rung HA-ben zi im LA-ga", "Dzień dobry, pani Nowak. Jakie ma Pani doświadczenie w magazynie?"],
          ["B", "Ich habe drei Jahre in Polen gearbeitet, auch mit dem Gabelstapler.", "ih HA-be draj JA-re in PO-len ge-AR-baj-tet, auch mit dem GA-bel-SZTA-pla", "Pracowałam trzy lata w Polsce, także na wózku widłowym."],
          ["A", "Sehr gut. Sprechen Sie Deutsch?", "zer gut. SZPRE-chen zi dojcz", "Bardzo dobrze. Mówi Pani po niemiecku?"],
          ["B", "Ein bisschen. Ich lerne jeden Tag, weil ich hier bleiben möchte.", "ajn BIS-chen. ih LER-ne JE-den tak, wajl ih hir BLAJ-ben MÖH-te", "Trochę. Uczę się codziennie, bo chcę tu zostać."],
          ["A", "Wann könnten Sie anfangen?", "wan KÖN-ten zi AN-fan-gen", "Kiedy mogłaby Pani zacząć?"],
          ["B", "Ich kann am ersten des Monats anfangen.", "ih kan am ERS-ten des MO-nacs AN-fan-gen", "Mogę zacząć pierwszego dnia miesiąca."]
        ],
        qs: [
          ["Ile lat pracowała w magazynie?", ["Rok", "Trzy lata", "Dziesięć lat"], 1],
          ["Jakim sprzętem pracowała?", ["Dźwigiem", "Wózkiem widłowym", "Koparką"], 1],
          ["Dlaczego uczy się niemieckiego?", ["Bo chce tu zostać", "Dla zabawy", "Bo musi na egzamin"], 0]
        ]
      }
    },
    {
      id: "u14", lvl: "B1", tags: ["trip"], title: "Wenn etwas schiefgeht", topic: "Problemy w podróży · Konjunktiv II (wenn ich…, würde ich…)",
      intro: "W podróży zdarzają się kłopoty: spóźnienie, zgubiony bagaż, zepsuty pokój. Uczysz się je opisać i grzecznie poprosić o rozwiązanie. Przy marzeniach i warunkach używasz „wenn… hätte / wäre, würde ich…”.",
      rules: [
        "<b>Mein Koffer ist nicht angekommen.</b> · <b>Der Flug hat Verspätung.</b> · <b>Ich habe meinen Pass verloren.</b>",
        "<b>Wo kann ich das melden?</b> · <b>Könnten Sie mir eine Bescheinigung geben?</b>",
        "<b>wenn ich … hätte / wäre, würde ich …</b>: <b>Wenn ich mehr Zeit hätte, würde ich länger bleiben.</b>",
        "<b>Es tut mir leid, aber …</b> · <b>Leider gibt es ein Problem.</b>",
        "Oferta: <b>Das Zimmer ist zu laut. Haben Sie ein anderes?</b>"
      ],
      ex: [
        ["Mein Koffer ist nicht angekommen.", "majn KO-fa ist niht AN-ge-ko-men", "Moja walizka nie dotarła."],
        ["Der Flug hat zwei Stunden Verspätung.", "der fluk hat cwaj SZTUN-den fer-SZPE-tung", "Lot ma dwie godziny opóźnienia."],
        ["Haben Sie ein anderes Zimmer?", "HA-ben zi ajn AN-de-res CI-ma", "Czy macie inny pokój?"],
        ["Wenn ich mehr Zeit hätte, würde ich länger bleiben.", "wen ih mer cajt HE-te, WÜR-de ih LEN-ga BLAJ-ben", "Gdybym miał/a więcej czasu, zostałbym/zostałabym dłużej."]
      ],
      words: [
        ["der Flug", "der fluk", "lot"], ["die Verspätung", "di fer-SZPE-tung", "opóźnienie"], ["verloren", "fer-LO-ren", "zgubiony"],
        ["der Pass", "der pas", "paszport"], ["das Gepäck", "das ge-PEK", "bagaż"], ["die Bescheinigung", "di be-SZAJ-ni-gung", "zaświadczenie"],
        ["der Ausweis", "der AUS-wajs", "dowód osobisty"], ["laut / leise", "laut / LAJ-ze", "głośny / cichy"], ["kaputt", "ka-PUT", "zepsuty"],
        ["verpassen", "fer-PA-sen", "przegapić (np. pociąg)"], ["die Versicherung", "di fer-ZI-he-rung", "ubezpieczenie"], ["der Notfall", "der NOT-fal", "nagły wypadek"]
      ],
      drill: [
        ["Mein Koffer ist nicht ___.", ["angekommen", "ankommen", "kommt an"], 0, "Perfekt (sein) → angekommen"],
        ["Der Flug hat ___.", ["Verspätung", "Schlüssel", "Rechnung"], 0, "opóźnienie → Verspätung"],
        ["Ich habe meinen Pass ___.", ["verloren", "verlieren", "verlor"], 0, "zgubiłem → verloren"],
        ["Wenn ich mehr Zeit ___, würde ich länger bleiben.", ["hätte", "habe", "hatte"], 0, "warunek nierealny → hätte"],
        ["Das Zimmer ist zu ___. Ich kann nicht schlafen.", ["laut", "billig", "früh"], 0, "za głośny → laut"],
        ["Ich habe den Zug ___.", ["verpasst", "verpassen", "verpasse"], 0, "przegapiłem → verpasst"]
      ],
      dialog: {
        title: "Zgubiony bagaż",
        lines: [
          ["A", "Entschuldigung, mein Koffer ist nicht angekommen.", "ent-SZUL-di-gung, majn KO-fa ist niht AN-ge-ko-men", "Przepraszam, moja walizka nie dotarła."],
          ["B", "Das tut mir leid. Wie sieht Ihr Koffer aus?", "das tut mir lajt. wi zit ir KO-fa aus", "Bardzo mi przykro. Jak wygląda walizka?"],
          ["A", "Er ist blau und hat ein rotes Band.", "er ist blau unt hat ajn RO-tes bant", "Jest niebieska i ma czerwoną wstążkę."],
          ["B", "Wir suchen ihn. Wo wohnen Sie in Hamburg?", "wir ZU-chen in. wo WO-nen zi in HAM-burk", "Szukamy jej. Gdzie Pan/Pani mieszka w Hamburgu?"],
          ["A", "Im Hotel Alster. Könnten Sie ihn dorthin liefern?", "im ho-TEL AL-sta. KÖN-ten zi in DORT-hin LI-fern", "W hotelu Alster. Czy mogliby Państwo go tam dostarczyć?"],
          ["B", "Ja, wir bringen ihn morgen früh.", "ja, wir BRIN-gen in MOR-gen frü", "Tak, przywieziemy ją jutro rano."]
        ],
        qs: [
          ["Jakiego koloru jest walizka?", ["Czerwona", "Niebieska", "Czarna"], 1],
          ["Gdzie mieszka pasażer?", ["W hotelu Alster", "U znajomych", "W hostelu"], 0],
          ["Kiedy dostanie walizkę?", ["Dzisiaj wieczorem", "Jutro rano", "Za tydzień"], 1]
        ]
      }
    },
    {
      id: "u15", lvl: "A2", tags: ["trip", "rozmowa"], title: "Wetter und Strand", topic: "Pogoda, plaża, czas wolny na wakacjach",
      intro: "Pogoda to najczęstszy temat rozmów. Większość zdań o pogodzie zaczyna się od „es” (to): es regnet = pada. Do aktywności używasz „gehen” + bezokolicznik na końcu.",
      rules: [
        "<b>Es regnet / schneit / ist windig / ist sonnig.</b> Słońce świeci: <b>Die Sonne scheint.</b>",
        "Pytanie: <b>Wie ist das Wetter?</b> – <b>Das Wetter ist schön / schlecht.</b>",
        "Temperatura: <b>Es sind 25 Grad.</b> · <b>Es ist warm / kalt / heiß / kühl.</b>",
        "<b>Ich gehe schwimmen / wandern / spazieren.</b> – czasownik z „gehen” stoi na końcu.",
        "Miejsce: <b>am Strand</b> (na plaży), <b>am Meer</b> (nad morzem), <b>im Wasser</b> (w wodzie), <b>in der Sonne</b> (na słońcu)."
      ],
      ex: [
        ["Heute scheint die Sonne.", "HOJ-te szajnt di ZO-ne", "Dzisiaj świeci słońce."],
        ["Es regnet seit gestern.", "es REG-net zajt GES-tern", "Pada od wczoraj."],
        ["Es sind fünfundzwanzig Grad.", "es zint FÜNF-unt-CWAN-cih grat", "Jest dwadzieścia pięć stopni."],
        ["Wir gehen am Strand spazieren.", "wir GE-en am sztrant szpa-CI-ren", "Idziemy na spacer po plaży."]
      ],
      words: [
        ["das Wetter", "das WE-ta", "pogoda"], ["die Sonne", "di ZO-ne", "słońce"], ["der Regen", "der RE-gen", "deszcz"],
        ["der Schnee", "der szne", "śnieg"], ["der Wind", "der wint", "wiatr"], ["heiß / kalt", "hajs / kalt", "gorąco / zimno"],
        ["das Meer", "das mer", "morze"], ["der See", "der ze", "jezioro"], ["der Berg", "der berk", "góra"],
        ["der Sonnenschirm", "der ZO-nen-szirm", "parasol plażowy"], ["die Sonnencreme", "di ZO-nen-krem", "krem z filtrem"], ["schwimmen", "SZWI-men", "pływać"]
      ],
      drill: [
        ["Heute ___ die Sonne.", ["regnet", "scheint", "schneit"], 1, "słońce świeci → scheint"],
        ["Es ___ seit gestern.", ["regnet", "scheint", "wärmt"], 0, "pada → regnet"],
        ["Wir gehen am Strand ___.", ["spaziert", "spazierst", "spazieren"], 2, "gehen + bezokolicznik na końcu"],
        ["Im Sommer ist es oft ___.", ["Schnee", "Regen", "heiß"], 2, "przymiotnik po „ist” → heiß"],
        ["Ich gehe im Meer ___.", ["geschwommen", "schwimmen", "schwimmt"], 1, "gehen + bezokolicznik"],
        ["Wie ist das ___ heute?", ["Wasser", "Wetter", "Wind"], 1, "pogoda → Wetter"]
      ],
      dialog: {
        title: "Pogoda w hotelu",
        lines: [
          ["A", "Entschuldigung, wie ist das Wetter morgen?", "ent-SZUL-di-gung, wi ist das WE-ta MOR-gen", "Przepraszam, jaka będzie jutro pogoda?"],
          ["B", "Es soll sonnig sein, ungefähr achtundzwanzig Grad.", "es zol ZO-nih zajn, UN-ge-fer ACHT-unt-CWAN-cih grat", "Ma być słonecznie, około dwudziestu ośmiu stopni."],
          ["A", "Perfekt! Dann gehe ich morgen an den Strand.", "per-FEKT! dan GE-e ih MOR-gen an den sztrant", "Świetnie! To jutro idę na plażę."],
          ["B", "Vergessen Sie die Sonnencreme nicht!", "fer-GE-sen zi di ZO-nen-krem niht", "Niech Pan/Pani nie zapomni kremu z filtrem!"],
          ["A", "Und am Abend? Wird es kalt?", "unt am A-bent? wirt es kalt", "A wieczorem? Będzie zimno?"],
          ["B", "Nein, es bleibt warm. Vielleicht gibt es ein Gewitter.", "najn, es blajpt warm. fi-LAJHT gipt es ajn ge-WI-ta", "Nie, zostanie ciepło. Może będzie burza."]
        ],
        qs: [
          ["Jaka ma być jutro pogoda?", ["Deszczowa", "Słoneczna", "Śnieżna"], 1],
          ["Co gość weźmie na plażę?", ["Parasol", "Krem z filtrem", "Kurtkę"], 1],
          ["Co może być wieczorem?", ["Burza", "Mróz", "Mgła"], 0]
        ]
      }
    },
    {
      id: "u16", lvl: "A2", tags: ["trip"], title: "Sehenswürdigkeiten", topic: "Zwiedzanie · gdzie? (Dativ) i dokąd? (Akkusativ)",
      intro: "Przy miejscach niemiecki odróżnia pytanie „gdzie?” (stoję tam) od „dokąd?” (idę tam). Gdzie? → celownik (in der Stadt, im Museum). Dokąd? → biernik (in die Stadt, ins Museum).",
      rules: [
        "<b>Wo?</b> (gdzie) – <b>im Museum, in der Kirche, am Bahnhof</b> (in dem → im, an dem → am).",
        "<b>Wohin?</b> (dokąd) – <b>ins Museum, in die Kirche, in die Stadt</b> (in das → ins).",
        "Do konkretnego miejsca często: <b>zum Bahnhof, zur Kirche</b> (zu dem → zum, zu der → zur).",
        "Bilet: <b>Zwei Karten für Erwachsene, bitte.</b> · zniżka: <b>Gibt es eine Ermäßigung?</b>",
        "Godziny otwarcia: <b>Das Schloss ist von 9 bis 17 Uhr geöffnet.</b>"
      ],
      ex: [
        ["Wir gehen ins Museum.", "wir GE-en ins mu-ZE-um", "Idziemy do muzeum."],
        ["Das Museum ist im Zentrum.", "das mu-ZE-um ist im CEN-trum", "Muzeum jest w centrum."],
        ["Zwei Karten für Erwachsene, bitte.", "cwaj KAR-ten für er-VAK-se-ne BI-te", "Poproszę dwa bilety dla dorosłych."],
        ["Wann ist das Schloss geöffnet?", "wan ist das szlos ge-ÖF-net", "Kiedy zamek jest otwarty?"]
      ],
      words: [
        ["die Sehenswürdigkeit", "di ZE-ens-wür-dih-kajt", "atrakcja turystyczna"], ["das Museum", "das mu-ZE-um", "muzeum"], ["das Schloss", "das szlos", "zamek, pałac"],
        ["die Kirche", "di KIR-he", "kościół"], ["die Altstadt", "di AL-sztat", "stare miasto"], ["der Eintritt", "der AJN-trit", "wstęp"],
        ["die Ermäßigung", "di er-ME-si-gung", "zniżka"], ["geöffnet / geschlossen", "ge-ÖF-net / ge-SZLO-sen", "otwarte / zamknięte"], ["der Stadtplan", "der SZTAT-plan", "plan miasta"],
        ["die Führung", "di FÜ-rung", "zwiedzanie z przewodnikiem"], ["das Foto", "das FO-to", "zdjęcie"], ["der Reiseführer", "der RAJ-ze-FÜ-ra", "przewodnik"]
      ],
      drill: [
        ["Wir gehen ___ Museum. (dokąd)", ["im", "ins", "in"], 1, "dokąd → biernik: in das → ins"],
        ["Das Museum ist ___ Zentrum. (gdzie)", ["ins", "in die", "im"], 2, "gdzie → celownik: in dem → im"],
        ["Wir fahren ___ Bahnhof.", ["zum", "zur", "im"], 0, "der Bahnhof → zum"],
        ["Gibt es eine ___ für Studenten?", ["Ermäßigung", "Führung", "Kirche"], 0, "zniżka → Ermäßigung"],
        ["Das Schloss ist von neun bis siebzehn Uhr ___.", ["geschlossen", "geöffnet", "geplant"], 1, "otwarty → geöffnet"],
        ["Wir gehen in ___ Altstadt.", ["der", "die", "dem"], 1, "dokąd → biernik: die"]
      ],
      dialog: {
        title: "Przy kasie w zamku",
        lines: [
          ["A", "Guten Tag. Zwei Karten für Erwachsene und eine für ein Kind, bitte.", "GU-ten tak. cwaj KAR-ten für er-VAK-se-ne unt AJ-ne für ajn kint, BI-te", "Dzień dobry. Dwa bilety dla dorosłych i jeden dla dziecka, proszę."],
          ["B", "Das macht dreißig Euro. Das Kind zahlt nichts.", "das macht DRAJ-sih OJ-ro. das kint calt nihts", "To trzydzieści euro. Dziecko nie płaci."],
          ["A", "Gibt es heute eine Führung?", "gipt es HOJ-te AJ-ne FÜ-rung", "Czy jest dziś zwiedzanie z przewodnikiem?"],
          ["B", "Ja, um elf Uhr, auch auf Englisch.", "ja, um elf ua, auch auf ENG-lisz", "Tak, o jedenastej, także po angielsku."],
          ["A", "Wann ist das Schloss geöffnet?", "wan ist das szlos ge-ÖF-net", "Do której zamek jest otwarty?"],
          ["B", "Bis siebzehn Uhr. Viel Spaß!", "bis ZIP-cen ua. fil szpas", "Do siedemnastej. Miłej zabawy!"]
        ],
        qs: [
          ["Ile zapłacą za bilety?", ["20 euro", "30 euro", "40 euro"], 1],
          ["O której jest zwiedzanie z przewodnikiem?", ["O 10:00", "O 11:00", "O 12:00"], 1],
          ["Do której zamek jest otwarty?", ["Do 17:00", "Do 15:00", "Do 19:00"], 0]
        ]
      }
    },
    {
      id: "u17", lvl: "B1", tags: ["trip"], title: "Urlaub planen und buchen", topic: "Przyszłość: werden + bezokolicznik, plany wakacyjne",
      intro: "O planach mówisz czasem teraźniejszym z dodatkiem czasu („im Sommer fahren wir”), a czasem czasem przyszłym: werden + bezokolicznik na końcu.",
      rules: [
        "<b>werden</b>: ich <b>werde</b>, du <b>wirst</b>, er / sie <b>wird</b>, wir <b>werden</b>, Sie <b>werden</b>.",
        "<b>Im Sommer werden wir nach Italien fahren.</b> – fahren na końcu.",
        "Plany: <b>Wir haben vor, ein Auto zu mieten.</b> (mamy zamiar wynająć) – „zu” + bezokolicznik.",
        "Pytania przy rezerwacji: <b>Ist das Frühstück inklusive? Gibt es eine Anzahlung?</b>",
        "Anulowanie: <b>Ich möchte die Buchung stornieren.</b> · <b>Kann ich kostenlos stornieren?</b>"
      ],
      ex: [
        ["Im Sommer werden wir nach Italien fahren.", "im ZO-ma WER-den wir nach i-TA-li-en FA-ren", "Latem pojedziemy do Włoch."],
        ["Wir haben vor, ein Auto zu mieten.", "wir HA-ben for, ajn AU-to cu MI-ten", "Planujemy wynająć samochód."],
        ["Ist das Frühstück inklusive?", "ist das FRÜ-sztük in-klu-ZI-we", "Czy śniadanie jest wliczone?"],
        ["Kann ich kostenlos stornieren?", "kan ih KOS-ten-los szto-NI-ren", "Czy mogę anulować bezpłatnie?"]
      ],
      words: [
        ["buchen", "BU-chen", "rezerwować"], ["die Ferienwohnung", "di FE-ri-en-WO-nung", "apartament wakacyjny"], ["der Mietwagen", "der MIT-wa-gen", "samochód z wypożyczalni"],
        ["inklusive", "in-klu-ZI-we", "wliczone"], ["die Anzahlung", "di AN-ca-lung", "zaliczka"], ["stornieren", "szto-NI-ren", "anulować"],
        ["die Reiseversicherung", "di RAJ-ze-fer-ZI-he-rung", "ubezpieczenie podróżne"], ["das Reisebüro", "das RAJ-ze-bü-RO", "biuro podróży"], ["die Unterkunft", "di UN-ta-kunft", "nocleg"],
        ["vergleichen", "fer-GLAJ-chen", "porównać"], ["die Ferien", "di FE-ri-en", "wakacje, ferie"], ["kostenlos", "KOS-ten-los", "bezpłatnie"]
      ],
      drill: [
        ["Im Sommer ___ wir nach Italien fahren.", ["werden", "wird", "wirst"], 0, "wir → werden"],
        ["Er ___ nächste Woche abreisen.", ["werde", "wird", "werden"], 1, "er → wird"],
        ["Wir haben vor, ein Auto ___ mieten.", ["zu", "zum", "um"], 0, "haben vor, … zu + bezokolicznik"],
        ["Ist das Frühstück ___?", ["kostenlos", "inklusive", "geöffnet"], 1, "wliczone → inklusive"],
        ["Ich möchte die Buchung ___.", ["stornieren", "storniert", "storniere"], 0, "po möchte → bezokolicznik"],
        ["Ich ___ im Juli drei Wochen Urlaub nehmen.", ["wirst", "werde", "werden"], 1, "ich → werde"]
      ],
      dialog: {
        title: "W biurze podróży",
        lines: [
          ["A", "Guten Tag, wir möchten im August eine Ferienwohnung am Meer buchen.", "GU-ten tak, wir MÖH-ten im au-GUST AJ-ne FE-ri-en-WO-nung am mer BU-chen", "Dzień dobry, chcielibyśmy zarezerwować w sierpniu apartament nad morzem."],
          ["B", "Für wie viele Personen und für wie lange?", "für wi FI-le per-ZO-nen unt für wi LAN-ge", "Na ile osób i na jak długo?"],
          ["A", "Für vier Personen, zwei Wochen. Wir werden mit dem Auto fahren.", "für fir per-ZO-nen, cwaj WO-chen. wir WER-den mit dem AU-to FA-ren", "Dla czterech osób, na dwa tygodnie. Pojedziemy samochodem."],
          ["B", "Ich habe eine Wohnung mit Balkon. Die Anzahlung beträgt zwanzig Prozent.", "ih HA-be AJ-ne WO-nung mit bal-KONG. di AN-ca-lung be-TREKT CWAN-cih pro-CENT", "Mam apartament z balkonem. Zaliczka to dwadzieścia procent."],
          ["A", "Kann ich kostenlos stornieren, wenn jemand krank wird?", "kan ih KOS-ten-los szto-NI-ren, wen JE-mant krank wirt", "Czy mogę bezpłatnie anulować, jeśli ktoś zachoruje?"],
          ["B", "Bis vierzehn Tage vorher, ja. Danach nur mit Versicherung.", "bis FIR-cen TA-ge for-HER, ja. da-NACH nur mit fer-ZI-he-rung", "Do czternastu dni wcześniej, tak. Później tylko z ubezpieczeniem."]
        ],
        qs: [
          ["Na jak długo jadą?", ["Na tydzień", "Na dwa tygodnie", "Na miesiąc"], 1],
          ["Ile wynosi zaliczka?", ["10%", "20%", "50%"], 1],
          ["Do kiedy można bezpłatnie anulować?", ["Do 14 dni przed", "Do 3 dni przed", "W ogóle nie można"], 0]
        ]
      }
    },
    {
      id: "u18", lvl: "A2", tags: ["administracja", "life"], title: "Im Amt", topic: "Petent w urzędzie · tryb rozkazujący (Sie)",
      intro: "W urzędzie słyszysz głównie polecenia w formie grzecznościowej: czasownik + Sie. Czasowniki rozdzielne oddają przedrostek na koniec: „Füllen Sie das Formular aus.”",
      rules: [
        "Polecenie: <b>czasownik + Sie</b>: <b>Kommen Sie bitte mit. Nehmen Sie Platz.</b>",
        "Rozdzielne: <b>ausfüllen → Füllen Sie das Formular aus.</b> · <b>mitbringen → Bringen Sie den Ausweis mit.</b>",
        "<b>Ich habe ein Anliegen.</b> = Mam sprawę do załatwienia. · <b>Wofür ist diese Behörde zuständig?</b>",
        "<b>Haben Sie einen Termin?</b> · <b>Ziehen Sie bitte eine Nummer.</b> (numerek)",
        "<b>Unterschreiben Sie bitte hier.</b> · <b>Hier ist meine Unterschrift.</b>"
      ],
      ex: [
        ["Ich habe ein Anliegen.", "ih HA-be ajn AN-li-gen", "Mam sprawę do załatwienia."],
        ["Füllen Sie bitte das Formular aus.", "FÜ-len zi BI-te das for-mu-LAR aus", "Proszę wypełnić formularz."],
        ["Bringen Sie Ihren Ausweis mit.", "BRIN-gen zi I-ren AUS-wajs mit", "Proszę przynieść dowód osobisty."],
        ["Haben Sie einen Termin?", "HA-ben zi AJ-nen ter-MIN", "Czy ma Pan/Pani umówiony termin?"]
      ],
      words: [
        ["das Amt", "das amt", "urząd"], ["die Behörde", "di be-HÖR-de", "organ administracji"], ["das Formular", "das for-mu-LAR", "formularz"],
        ["der Ausweis", "der AUS-wajs", "dowód osobisty"], ["unterschreiben", "un-ta-SZRAJ-ben", "podpisać"], ["die Unterschrift", "di UN-ta-szrift", "podpis"],
        ["das Anliegen", "das AN-li-gen", "sprawa, prośba"], ["zuständig", "CU-sztendih", "właściwy, odpowiedzialny"], ["die Wartenummer", "di WAR-te-NU-ma", "numerek w kolejce"],
        ["die Anmeldung", "di AN-mel-dung", "zgłoszenie, meldunek"], ["der Sachbearbeiter", "der ZACH-be-AR-baj-ta", "referent"], ["der Schalter", "der SZAL-ta", "okienko"]
      ],
      drill: [
        ["___ Sie bitte das Formular aus.", ["Fülle", "Füllen", "Füllt"], 1, "Sie → forma na -en, aus na końcu"],
        ["Bringen Sie Ihren Ausweis ___.", ["mit", "zu", "an"], 0, "mitbringen → mit na końcu"],
        ["Ich habe ein ___.", ["Anliegen", "Formular", "Schalter"], 0, "mam sprawę"],
        ["Haben Sie einen ___?", ["Termin", "Unterschrift", "Amt"], 0, "umówiona wizyta"],
        ["___ Sie bitte hier. (podpisać)", ["Unterschreibt", "Unterschreiben", "Unterschrieb"], 1, "Sie → Unterschreiben"],
        ["Wofür ist diese Behörde ___?", ["zuständig", "geöffnet", "fertig"], 0, "właściwy → zuständig"]
      ],
      dialog: {
        title: "Na okienku",
        lines: [
          ["A", "Guten Morgen. Ich habe ein Anliegen: Ich möchte mich anmelden.", "GU-ten MOR-gen. ih HA-be ajn AN-li-gen: ih MÖH-te mih AN-mel-den", "Dzień dobry. Mam sprawę: chcę się zameldować."],
          ["B", "Haben Sie einen Termin?", "HA-ben zi AJ-nen ter-MIN", "Czy ma Pan/Pani termin?"],
          ["A", "Ja, um zehn Uhr. Hier ist die Bestätigung.", "ja, um cen ua. hir ist di be-SZTE-ti-gung", "Tak, na dziesiątą. Oto potwierdzenie."],
          ["B", "Gut. Füllen Sie bitte dieses Formular aus und zeigen Sie Ihren Ausweis.", "gut. FÜ-len zi BI-te DI-zes for-mu-LAR aus unt CAJ-gen zi I-ren AUS-wajs", "Dobrze. Proszę wypełnić ten formularz i pokazać dowód."],
          ["A", "Bitte schön. Muss ich noch etwas mitbringen?", "BI-te szön. mus ih noh ET-was MIT-brin-gen", "Proszę. Czy muszę jeszcze coś przynieść?"],
          ["B", "Nein, das reicht. Unterschreiben Sie hier unten.", "najn, das rajht. un-ta-SZRAJ-ben zi hir UN-ten", "Nie, to wystarczy. Proszę podpisać na dole."]
        ],
        qs: [
          ["W jakiej sprawie przyszedł petent?", ["Zameldowanie", "Wymiana prawa jazdy", "Podatek"], 0],
          ["O której miał termin?", ["O 9:00", "O 10:00", "O 11:00"], 1],
          ["Co jeszcze musi zrobić?", ["Przynieść zdjęcie", "Zapłacić", "Podpisać na dole"], 2]
        ]
      }
    },
    {
      id: "u19", lvl: "B1", tags: ["administracja"], title: "Anträge und Bescheide", topic: "Strona bierna: wird geprüft, werden bearbeitet",
      intro: "W administracji mówi się o czynnościach, a nie o osobach: „Der Antrag wird geprüft” (wniosek jest sprawdzany). To strona bierna: werden + imiesłów na końcu.",
      rules: [
        "<b>wird / werden + Partizip II</b>: <b>Der Antrag wird geprüft.</b> · <b>Die Unterlagen werden bearbeitet.</b>",
        "Liczba mnoga: <b>Die Anträge werden geprüft.</b> (rzeczownik w liczbie mnogiej → werden).",
        "Wniosek: <b>einen Antrag stellen / einreichen</b>. Decyzja: <b>der Bescheid</b>.",
        "Termin: <b>innerhalb von vier Wochen</b> (w ciągu czterech tygodni) · <b>bis zum 15. Mai</b>.",
        "Odwołanie: <b>Sie können Widerspruch einlegen.</b>"
      ],
      ex: [
        ["Der Antrag wird geprüft.", "der AN-trak wirt ge-PRÜFT", "Wniosek jest sprawdzany."],
        ["Der Bescheid wird per Post geschickt.", "der be-SZAJT wirt per post ge-SZIKT", "Decyzja zostanie wysłana pocztą."],
        ["Sie müssen den Antrag innerhalb von vier Wochen stellen.", "zi MÜ-sen den AN-trak I-na-halp fon fir WO-chen SZTE-len", "Musi Pan/Pani złożyć wniosek w ciągu czterech tygodni."],
        ["Es fehlt noch eine Unterlage.", "es felt noh AJ-ne UN-ta-LA-ge", "Brakuje jeszcze jednego dokumentu."]
      ],
      words: [
        ["der Antrag", "der AN-trak", "wniosek"], ["der Bescheid", "der be-SZAJT", "decyzja"], ["prüfen", "PRÜ-fen", "sprawdzać"],
        ["bearbeiten", "be-AR-baj-ten", "rozpatrywać"], ["genehmigen", "ge-NE-mi-gen", "zatwierdzić"], ["ablehnen", "AP-le-nen", "odrzucić"],
        ["der Widerspruch", "der WI-da-szpruch", "odwołanie"], ["die Frist", "di frist", "termin, termin ostateczny"], ["einreichen", "AJN-raj-chen", "złożyć (dokument)"],
        ["die Unterlage", "di UN-ta-LA-ge", "dokument"], ["die Gebühr", "di ge-BÜR", "opłata"], ["die Genehmigung", "di ge-NE-mi-gung", "zezwolenie"]
      ],
      drill: [
        ["Der Antrag ___ geprüft.", ["werden", "wird", "wurde"], 1, "Antrag (l. poj.) → wird"],
        ["Die Unterlagen ___ bearbeitet.", ["wird", "werden", "wirst"], 1, "liczba mnoga → werden"],
        ["Der Bescheid wird per Post ___.", ["schicken", "geschickt", "schickt"], 1, "strona bierna → Partizip II"],
        ["Sie können ___ einlegen.", ["Widerspruch", "Gebühr", "Antrag"], 0, "odwołanie → Widerspruch"],
        ["Der Antrag wurde leider ___.", ["abgelehnt", "ablehnen", "lehnt ab"], 0, "odrzucono → abgelehnt"],
        ["Bitte reichen Sie die Unterlagen ___ von zwei Wochen ein.", ["in", "innerhalb", "außer"], 1, "w ciągu → innerhalb von"]
      ],
      dialog: {
        title: "Status wniosku",
        lines: [
          ["A", "Guten Tag, ich habe vor drei Wochen einen Antrag gestellt. Wie ist der Stand?", "GU-ten tak, ih HA-be for draj WO-chen AJ-nen AN-trak ge-SZTELT. wi ist der sztant", "Dzień dobry, trzy tygodnie temu złożyłem/am wniosek. Jaki jest stan sprawy?"],
          ["B", "Einen Moment. Ihr Antrag wird gerade geprüft.", "AJ-nen mo-MENT. ir AN-trak wirt ge-RA-de ge-PRÜFT", "Chwileczkę. Pana/Pani wniosek jest właśnie sprawdzany."],
          ["A", "Wie lange dauert das noch?", "wi LAN-ge DAU-ert das noh", "Jak długo to jeszcze potrwa?"],
          ["B", "Etwa zwei Wochen. Es fehlt aber noch eine Unterlage.", "ET-wa cwaj WO-chen. es felt A-ba noh AJ-ne UN-ta-LA-ge", "Około dwóch tygodni. Brakuje jednak jeszcze dokumentu."],
          ["A", "Welche Unterlage fehlt?", "WEL-he UN-ta-LA-ge felt", "Którego dokumentu brakuje?"],
          ["B", "Die Gehaltsbescheinigung. Bitte reichen Sie sie bis Freitag nach.", "di ge-HALTS-be-SZAJ-ni-gung. BI-te RAJ-chen zi zi bis FRAJ-tak nach", "Zaświadczenia o zarobkach. Proszę dosłać je do piątku."]
        ],
        qs: [
          ["Co się dzieje z wnioskiem?", ["Jest sprawdzany", "Został odrzucony", "Został zatwierdzony"], 0],
          ["Czego brakuje?", ["Paszportu", "Zaświadczenia o zarobkach", "Podpisu"], 1],
          ["Do kiedy trzeba dosłać dokument?", ["Do piątku", "Do poniedziałku", "Do końca miesiąca"], 0]
        ]
      }
    },
    {
      id: "u20", lvl: "B1", tags: ["administracja", "biuro"], title: "Schreiben und Fristen", topic: "Pisma urzędowe · Genitiv (des, der)",
      intro: "Język pism jest sztywniejszy. Często używa się dopełniacza (Genitiv): „der Antrag des Bürgers” (wniosek obywatela) i przyimków typu „wegen”, „aufgrund”.",
      rules: [
        "Genitiv: <b>des</b> (m, n) + końcówka -s: <b>der Antrag des Bürgers</b>; <b>der</b> (f, l. mn.): <b>die Frist der Behörde</b>.",
        "Przyimki z Genitiv: <b>wegen des Fehlers</b> (z powodu błędu), <b>aufgrund des Antrags</b> (na podstawie).",
        "Początek pisma: <b>Bezugnehmend auf Ihr Schreiben vom 5. Mai …</b>",
        "Prośba: <b>Wir bitten um Rückmeldung bis zum 30. Juni.</b> · <b>Wir bitten um Verständnis.</b>",
        "Zakończenie: <b>Mit freundlichen Grüßen, Im Auftrag</b> (z upoważnienia)."
      ],
      ex: [
        ["Der Antrag des Bürgers wird geprüft.", "der AN-trak des BÜR-gers wirt ge-PRÜFT", "Wniosek obywatela jest sprawdzany."],
        ["Wegen des Fehlers bitten wir um Verständnis.", "WE-gen des FE-lers BI-ten wir um fer-SZTENT-nis", "Z powodu błędu prosimy o wyrozumiałość."],
        ["Bezugnehmend auf Ihr Schreiben vom 5. Mai …", "be-CUK-ne-mend auf ir SZRAJ-ben fom FÜNF-ten maj", "W nawiązaniu do Pańskiego pisma z 5 maja…"],
        ["Wir bitten um Rückmeldung bis zum 30. Juni.", "wir BI-ten um RÜK-mel-dung bis cum DRAJ-sih-sten JU-ni", "Prosimy o odpowiedź do 30 czerwca."]
      ],
      words: [
        ["das Schreiben", "das SZRAJ-ben", "pismo"], ["der Bürger / die Bürgerin", "der BÜR-ga / di BÜR-ge-rin", "obywatel / obywatelka"], ["die Rückmeldung", "di RÜK-mel-dung", "odpowiedź zwrotna"],
        ["im Auftrag", "im AUF-trak", "z upoważnienia"], ["die Stellungnahme", "di SZTE-lungs-na-me", "stanowisko, opinia"], ["das Aktenzeichen", "das AK-ten-CAJ-chen", "znak sprawy"],
        ["der Zeitraum", "der CAJT-raum", "okres"], ["verspätet", "fer-SZPE-tet", "spóźniony"], ["das Verfahren", "das fer-FA-ren", "postępowanie"],
        ["bitten um", "BI-ten um", "prosić o"], ["wegen", "WE-gen", "z powodu"], ["die Zuständigkeit", "di CU-sztendih-kajt", "właściwość"]
      ],
      drill: [
        ["der Antrag ___ Bürgers", ["der", "des", "dem"], 1, "dopełniacz, rodzaj męski → des"],
        ["die Frist ___ Behörde", ["des", "der", "den"], 1, "dopełniacz, rodzaj żeński → der"],
        ["___ des Fehlers bitten wir um Verständnis.", ["Wegen", "Wenn", "Weil"], 0, "z powodu + Genitiv → wegen"],
        ["Bitte nennen Sie das ___ in Ihrer Antwort.", ["Aktenzeichen", "Wetter", "Gepäck"], 0, "znak sprawy → Aktenzeichen"],
        ["Wir bitten ___ Rückmeldung bis Freitag.", ["für", "um", "an"], 1, "bitten um"],
        ["Mit freundlichen Grüßen, ___ Auftrag", ["in", "im", "am"], 1, "z upoważnienia → im Auftrag"]
      ],
      dialog: {
        title: "Rozmowa o piśmie",
        lines: [
          ["A", "Frau Nowak, haben Sie das Schreiben an Herrn Weber gesehen?", "frau NO-wak, HA-ben zi das SZRAJ-ben an hern WE-ba ge-ZE-en", "Pani Nowak, czy widziała Pani pismo do pana Webera?"],
          ["B", "Ja. Es geht um den Antrag des Bürgers vom ersten März.", "ja. es get um den AN-trak des BÜR-gers fom ERS-ten merc", "Tak. Chodzi o wniosek obywatela z pierwszego marca."],
          ["A", "Wir müssen uns wegen der Verspätung entschuldigen.", "wir MÜ-sen uns WE-gen der fer-SZPE-tung ent-SZUL-di-gen", "Musimy przeprosić za opóźnienie."],
          ["B", "Richtig. Ich schreibe: Wir bitten um Verständnis für die verspätete Antwort.", "RIH-tih. ih SZRAJ-be: wir BI-ten um fer-SZTENT-nis für di fer-SZPE-te-te ANT-wort", "Zgadza się. Napiszę: Prosimy o wyrozumiałość za spóźnioną odpowiedź."],
          ["A", "Und bitte das Aktenzeichen nicht vergessen.", "unt BI-te das AK-ten-CAJ-chen niht fer-GE-sen", "I proszę nie zapomnieć znaku sprawy."],
          ["B", "Natürlich. Ich lege es Ihnen heute zur Unterschrift vor.", "na-TÜR-lih. ih LE-ge es I-nen HOJ-te cur UN-ta-szrift for", "Oczywiście. Dziś przedłożę je Panu do podpisu."]
        ],
        qs: [
          ["Czego dotyczy pismo?", ["Wniosku obywatela", "Faktury", "Urlopu"], 0],
          ["Za co przepraszają?", ["Za błąd w adresie", "Za opóźnienie", "Za brak podpisu"], 1],
          ["O czym ma nie zapomnieć?", ["O załączniku", "O pieczątce", "O znaku sprawy"], 2]
        ]
      }
    },
    {
      id: "u21", lvl: "B1", tags: ["administracja", "klienci"], title: "Beratung am Schalter", topic: "Obsługa petenta · zdania z falls, sobald, bevor",
      intro: "Przy okienku wyjaśniasz procedury krok po kroku. Przydają się spójniki czasu i warunku: falls (jeśli), sobald (jak tylko), bevor (zanim). Odmieniony czasownik idzie wtedy na koniec zdania podrzędnego.",
      rules: [
        "<b>Falls Sie Fragen haben, rufen Sie uns an.</b> – po przecinku czasownik od razu: rufen.",
        "<b>Sobald der Bescheid vorliegt, informieren wir Sie.</b> (jak tylko decyzja będzie gotowa)",
        "<b>Bevor Sie unterschreiben, lesen Sie bitte alles.</b> (zanim Pan/Pani podpisze)",
        "Wymagania: <b>Sie müssen … mitbringen / Sie brauchen …</b> · <b>Es fehlt noch …</b>",
        "Upewnianie się: <b>Haben Sie das verstanden?</b> · <b>Ich erkläre es noch einmal langsamer.</b>"
      ],
      ex: [
        ["Falls Sie Fragen haben, rufen Sie uns an.", "fals zi FRA-gen HA-ben, RU-fen zi uns an", "Jeśli ma Pan/Pani pytania, proszę dzwonić."],
        ["Sobald der Bescheid vorliegt, informieren wir Sie.", "zo-BALT der be-SZAJT FOR-likt, in-for-MI-ren wir zi", "Jak tylko decyzja będzie gotowa, poinformujemy Pana/Panią."],
        ["Bevor Sie unterschreiben, lesen Sie alles.", "be-FOR zi un-ta-SZRAJ-ben, LE-zen zi A-les", "Zanim Pan/Pani podpisze, proszę wszystko przeczytać."],
        ["Ich erkläre es Ihnen noch einmal.", "ih er-KLE-re es I-nen noh AJN-mal", "Wyjaśnię to jeszcze raz."]
      ],
      words: [
        ["erklären", "er-KLE-ren", "wyjaśniać"], ["informieren", "in-for-MI-ren", "informować"], ["sobald", "zo-BALT", "jak tylko"],
        ["falls", "fals", "jeśli, w razie gdyby"], ["bevor", "be-FOR", "zanim"], ["die Öffnungszeiten", "di ÖF-nungs-CAJ-ten", "godziny otwarcia"],
        ["der Schalter", "der SZAL-ta", "okienko"], ["die Beratung", "di be-RA-tung", "porada, konsultacja"], ["die Wartezeit", "di WAR-te-cajt", "czas oczekiwania"],
        ["die Zahlung", "di CA-lung", "płatność"], ["die Kopie", "di ko-PI", "kopia"], ["vorliegen", "FOR-li-gen", "być dostępnym, wpłynąć"]
      ],
      drill: [
        ["___ Sie Fragen haben, rufen Sie an.", ["Falls", "Bevor", "Obwohl"], 0, "jeśli → falls"],
        ["___ der Bescheid vorliegt, informieren wir Sie.", ["Sobald", "Weil", "Dass"], 0, "jak tylko → sobald"],
        ["Bevor Sie unterschreiben, ___ Sie alles.", ["lesen", "lest", "liest"], 0, "Sie → lesen"],
        ["Ich ___ es Ihnen noch einmal.", ["erkläre", "erklärt", "erklären"], 0, "ich → erkläre"],
        ["Wenn Sie fertig ___, kommen Sie wieder.", ["sind", "ist", "bin"], 0, "Sie → sind (na końcu)"],
        ["Haben Sie das ___?", ["verstanden", "verstehen", "versteht"], 0, "zrozumiane → verstanden"]
      ],
      dialog: {
        title: "Porada przy okienku",
        lines: [
          ["A", "Guten Tag. Ich möchte eine Genehmigung beantragen. Was muss ich tun?", "GU-ten tak. ih MÖH-te AJ-ne ge-NE-mi-gung be-AN-tra-gen. was mus ih tun", "Dzień dobry. Chcę złożyć wniosek o zezwolenie. Co muszę zrobić?"],
          ["B", "Zuerst füllen Sie dieses Formular aus. Bevor Sie es abgeben, kopieren Sie bitte Ihren Ausweis.", "cu-ERST FÜ-len zi DI-zes for-mu-LAR aus. be-FOR zi es AP-ge-ben, ko-PI-ren zi BI-te I-ren AUS-wajs", "Najpierw proszę wypełnić ten formularz. Zanim go Pan/Pani złoży, proszę skopiować dowód."],
          ["A", "Und wie lange dauert die Bearbeitung?", "unt wi LAN-ge DAU-ert di be-AR-baj-tung", "A jak długo trwa rozpatrywanie?"],
          ["B", "Etwa vier Wochen. Sobald der Bescheid vorliegt, bekommen Sie einen Brief.", "ET-wa fir WO-chen. zo-BALT der be-SZAJT FOR-likt, be-KO-men zi AJ-nen brif", "Około czterech tygodni. Jak tylko decyzja będzie gotowa, dostanie Pan/Pani list."],
          ["A", "Was kostet das?", "was KOS-tet das", "Ile to kosztuje?"],
          ["B", "Die Gebühr beträgt fünfzig Euro. Falls Sie noch Fragen haben, rufen Sie uns an.", "di ge-BÜR be-TREKT FÜNF-cih OJ-ro. fals zi noh FRA-gen HA-ben, RU-fen zi uns an", "Opłata wynosi pięćdziesiąt euro. Jeśli ma Pan/Pani jeszcze pytania, proszę dzwonić."]
        ],
        qs: [
          ["Co trzeba zrobić przed złożeniem formularza?", ["Zapłacić", "Skopiować dowód", "Umówić termin"], 1],
          ["Jak długo trwa rozpatrywanie?", ["Około dwóch tygodni", "Około czterech tygodni", "Około dwóch miesięcy"], 1],
          ["Ile wynosi opłata?", ["15 euro", "50 euro", "100 euro"], 1]
        ]
      }
    },
    {
      id: "u22", lvl: "A1", tags: ["rozmowa", "life"], title: "Small Talk", topic: "Rozmowa towarzyska · gern, lieber, am liebsten",
      intro: "W luźnej rozmowie z koleżanką czy sąsiadem mówimy „du”. Najważniejsze słowa: gern (chętnie, lubię), lieber (wolę) i am liebsten (najbardziej lubię).",
      rules: [
        "<b>Wie geht's? – Gut, danke. Und dir?</b> (Jak się masz? – Dobrze, dzięki. A tobie?)",
        "<b>gern</b> = lubię: <b>Ich spiele gern Tennis.</b> · <b>lieber</b> = wolę: <b>Ich trinke lieber Tee.</b> · <b>am liebsten</b> = najbardziej.",
        "Hobby: <b>Was machst du in deiner Freizeit? – Ich lese, koche, wandere.</b>",
        "Odmiana „du”: <b>Was machst du? Wo wohnst du? Hast du Kinder?</b>",
        "Łączniki: <b>und</b> (i), <b>aber</b> (ale), <b>oder</b> (albo), <b>auch</b> (też)."
      ],
      ex: [
        ["Wie geht's dir?", "wi gets dir", "Jak się masz?"],
        ["Ich koche gern.", "ih KO-che gern", "Lubię gotować."],
        ["Was machst du am Wochenende?", "was machst du am WO-chen-EN-de", "Co robisz w weekend?"],
        ["Ich trinke lieber Tee als Kaffee.", "ih TRIN-ke LI-ba te als KA-fe", "Wolę herbatę niż kawę."]
      ],
      words: [
        ["das Hobby", "das HO-bi", "hobby"], ["die Freizeit", "di FRAJ-cajt", "czas wolny"], ["lesen", "LE-zen", "czytać"],
        ["kochen", "KO-chen", "gotować"], ["wandern", "WAN-dern", "chodzić po górach"], ["Musik hören", "mu-ZIK HÖ-ren", "słuchać muzyki"],
        ["Sport machen", "szport MA-chen", "uprawiać sport"], ["reisen", "RAJ-zen", "podróżować"], ["gern", "gern", "chętnie, lubię"],
        ["lieber", "LI-ba", "wolę"], ["das Wochenende", "das WO-chen-EN-de", "weekend"], ["Wie geht's?", "wi gets", "Jak się masz?"]
      ],
      drill: [
        ["Ich spiele ___ Tennis.", ["gut", "gern", "viel"], 1, "lubię → gern"],
        ["Was ___ du in deiner Freizeit?", ["mache", "machst", "macht"], 1, "du → machst"],
        ["Ich trinke ___ Tee als Kaffee.", ["gern", "am liebsten", "lieber"], 2, "wolę (niż) → lieber"],
        ["Wie ___ es dir?", ["geht", "gehst", "gehe"], 0, "Wie geht es dir?"],
        ["Ich ___ gern Bücher.", ["liest", "lesen", "lese"], 2, "ich → lese"],
        ["Hast du Kinder? – Nein, ___ habe keine.", ["du", "ich", "er"], 1, "odpowiadasz o sobie → ich"]
      ],
      dialog: {
        title: "Rozmowa o weekendzie",
        lines: [
          ["A", "Hallo Tom! Wie geht's dir?", "ha-LO tom! wi gets dir", "Cześć Tom! Jak się masz?"],
          ["B", "Gut, danke. Und dir?", "gut, DAN-ke. unt dir", "Dobrze, dzięki. A tobie?"],
          ["A", "Auch gut. Was machst du am Wochenende?", "auch gut. was machst du am WO-chen-EN-de", "Też dobrze. Co robisz w weekend?"],
          ["B", "Ich wandere gern. Ich fahre in die Berge.", "ih WAN-de-re gern. ih FA-re in di BER-ge", "Lubię chodzić po górach. Jadę w góry."],
          ["A", "Schön! Ich bleibe lieber zu Hause und koche.", "szön! ih BLAJ-be LI-ba cu HAU-ze unt KO-che", "Ładnie! Ja wolę zostać w domu i gotować."],
          ["B", "Dann wünsche ich dir ein schönes Wochenende!", "dan WÜN-sze ih dir ajn SZÖ-nes WO-chen-EN-de", "To życzę ci miłego weekendu!"]
        ],
        qs: [
          ["Co robi Tom w weekend?", ["Pracuje", "Chodzi po górach", "Gotuje"], 1],
          ["Co woli robić druga osoba?", ["Jechać w góry", "Spać", "Zostać w domu i gotować"], 2],
          ["Czego życzy na koniec?", ["Miłego weekendu", "Powodzenia", "Smacznego"], 0]
        ]
      }
    },
    {
      id: "u23", lvl: "A2", tags: ["rozmowa", "life"], title: "Verabredungen", topic: "Umawianie się · Hast du Lust…? Wollen wir…?",
      intro: "Chcesz kogoś zaprosić albo odmówić uprzejmie? Wystarczy kilka formuł. „Lust haben” znaczy mieć ochotę, a „etwas vorhaben” – mieć coś w planach.",
      rules: [
        "<b>Hast du Lust, ins Kino zu gehen?</b> – Masz ochotę pójść do kina? („zu” + bezokolicznik na końcu).",
        "<b>Wollen wir einen Kaffee trinken?</b> – Napijemy się kawy? (propozycja: wollen wir + bezokolicznik).",
        "Odmowa: <b>Leider kann ich nicht. Ich habe schon etwas vor.</b> (vorhaben – mieć plany).",
        "Termin: <b>Wann passt es dir? – Am Samstag um sieben.</b> · <b>halb acht</b> = 7:30.",
        "Miejsce spotkania: <b>Wo treffen wir uns? – Vor dem Kino.</b> (vor + celownik: dem)."
      ],
      ex: [
        ["Hast du Lust, ins Kino zu gehen?", "hast du lust, ins KI-no cu GE-en", "Masz ochotę pójść do kina?"],
        ["Wollen wir einen Kaffee trinken?", "WO-len wir AJ-nen KA-fe TRIN-ken", "Napijemy się kawy?"],
        ["Leider habe ich schon etwas vor.", "LAJ-da HA-be ih szon ET-was for", "Niestety mam już plany."],
        ["Wo treffen wir uns?", "wo TRE-fen wir uns", "Gdzie się spotkamy?"]
      ],
      words: [
        ["die Verabredung", "di fer-AP-re-dung", "umówione spotkanie"], ["einladen", "AJN-la-den", "zaprosić"], ["die Einladung", "di AJN-la-dung", "zaproszenie"],
        ["treffen", "TRE-fen", "spotkać"], ["das Kino", "das KI-no", "kino"], ["das Konzert", "das kon-CERT", "koncert"],
        ["Lust haben", "lust HA-ben", "mieć ochotę"], ["vorhaben", "FOR-ha-ben", "mieć w planach"], ["passen", "PA-sen", "pasować"],
        ["absagen", "AP-za-gen", "odwołać, odmówić"], ["pünktlich", "PINKT-lih", "punktualnie"], ["abholen", "AP-ho-len", "odebrać"]
      ],
      drill: [
        ["Hast du ___, ins Kino zu gehen?", ["Zeit", "Idee", "Lust"], 2, "mieć ochotę → Lust haben"],
        ["___ wir einen Kaffee trinken?", ["Wollen", "Wollt", "Will"], 0, "wir → wollen"],
        ["Ich habe schon etwas ___.", ["an", "vor", "für"], 1, "vorhaben → vor"],
        ["Wo ___ wir uns?", ["triffst", "treffen", "trifft"], 1, "wir → treffen"],
        ["Wir treffen uns ___ dem Kino.", ["zu", "auf", "vor"], 2, "przed → vor + celownik"],
        ["Das ___ mir gut.", ["passen", "passt", "passe"], 1, "es passt mir"]
      ],
      dialog: {
        title: "Wieczór w kinie",
        lines: [
          ["A", "Hast du am Samstag Zeit? Wollen wir ins Kino gehen?", "hast du am ZAM-stak cajt? WO-len wir ins KI-no GE-en", "Masz w sobotę czas? Pójdziemy do kina?"],
          ["B", "Ja, gern! Um wie viel Uhr?", "ja, gern! um wi fil ua", "Tak, chętnie! O której?"],
          ["A", "Der Film beginnt um acht. Wir treffen uns um halb acht vor dem Kino.", "der film be-GINT um acht. wir TRE-fen uns um halp acht for dem KI-no", "Film zaczyna się o ósmej. Spotkajmy się o wpół do ósmej przed kinem."],
          ["B", "Gut. Soll ich die Tickets kaufen?", "gut. zol ih di TI-kets KAU-fen", "Dobrze. Mam kupić bilety?"],
          ["A", "Nein, ich kaufe sie schon heute online.", "najn, ih KAU-fe zi szon HOJ-te on-LAJN", "Nie, kupię je już dziś przez internet."],
          ["B", "Super! Bis Samstag, tschüss!", "ZU-pa! bis ZAM-stak, czüs", "Super! Do soboty, cześć!"]
        ],
        qs: [
          ["Dokąd się wybierają?", ["Na koncert", "Do kina", "Do restauracji"], 1],
          ["O której się spotykają?", ["O 19:30", "O 20:00", "O 18:30"], 0],
          ["Kto kupi bilety?", ["Druga osoba", "Oboje", "Pierwsza osoba"], 2]
        ]
      }
    },
    {
      id: "u24", lvl: "A2", tags: ["rozmowa", "dom"], title: "Nachbarn und Alltag", topic: "Sąsiedzi i drobne prośby · tryb rozkazujący (du, Sie)",
      intro: "Z sąsiadem czy znajomym prosimy o drobne rzeczy. Używamy trybu rozkazującego z „bitte” oraz uprzejmego „könnten Sie…?”. Do znajomych (du) czasownik jest krótki: Komm! Warte!",
      rules: [
        "<b>du</b>: bez końcówki: <b>Komm herein! Warte kurz! Mach die Tür zu!</b>",
        "<b>Sie</b>: czasownik + Sie: <b>Kommen Sie herein! Warten Sie bitte.</b> · <b>sein → Seien Sie leise!</b>",
        "Uprzejmie: <b>Könnten Sie bitte die Musik leiser machen?</b>",
        "Pożyczanie: <b>Kannst du mir deine Leiter leihen?</b> (bezokolicznik na końcu).",
        "Odpowiedzi: <b>Kein Problem! · Gern geschehen! · Das ist nett von Ihnen.</b>"
      ],
      ex: [
        ["Kommen Sie bitte herein!", "KO-men zi BI-te he-RAJN", "Proszę wejść!"],
        ["Warte bitte kurz!", "WAR-te BI-te kurc", "Poczekaj chwilę!"],
        ["Könnten Sie bitte leiser sein?", "KÖN-ten zi BI-te LAJ-za zajn", "Czy mogliby Państwo być ciszej?"],
        ["Danke für Ihre Hilfe!", "DAN-ke für I-re HIL-fe", "Dziękuję za pomoc!"]
      ],
      words: [
        ["der Nachbar / die Nachbarin", "der NACH-bar / di NACH-ba-rin", "sąsiad / sąsiadka"], ["die Tür", "di tür", "drzwi"], ["das Fenster", "das FENS-ta", "okno"],
        ["die Treppe", "di TRE-pe", "schody"], ["der Müll", "der mül", "śmieci"], ["leise / laut", "LAJ-ze / laut", "cicho / głośno"],
        ["die Hilfe", "di HIL-fe", "pomoc"], ["leihen", "LAJ-en", "pożyczyć"], ["öffnen", "ÖF-nen", "otworzyć"],
        ["schließen", "SZLI-sen", "zamknąć"], ["der Lärm", "der lerm", "hałas"], ["die Störung", "di SZTÖ-rung", "przeszkoda, zakłócenie"]
      ],
      drill: [
        ["___ Sie bitte herein!", ["Kommt", "Komm", "Kommen"], 2, "Sie → Kommen"],
        ["___ bitte kurz! (do znajomego)", ["Warte", "Warten", "Wartet"], 0, "du, rozkaz → Warte"],
        ["Könnten Sie bitte ___ sein?", ["laut", "leiser", "Lärm"], 1, "ciszej → leiser"],
        ["Kannst du mir deine Leiter ___?", ["geliehen", "lieh", "leihen"], 2, "po kannst → bezokolicznik"],
        ["Danke für Ihre ___!", ["Müll", "Hilfe", "Tür"], 1, "pomoc → Hilfe"],
        ["Mach bitte das Fenster ___.", ["zu", "an", "mit"], 0, "zumachen → zu"]
      ],
      dialog: {
        title: "U sąsiadki",
        lines: [
          ["A", "Guten Abend, Frau Nowak. Entschuldigen Sie die Störung.", "GU-ten A-bent, frau NO-wak. ent-SZUL-di-gen zi di SZTÖ-rung", "Dobry wieczór, pani Nowak. Przepraszam za najście."],
          ["B", "Kein Problem. Kommen Sie doch herein!", "kajn pro-BLEM. KO-men zi doh he-RAJN", "Nie ma problemu. Proszę wejść!"],
          ["A", "Nein, danke. Könnten Sie bitte die Musik etwas leiser machen? Mein Kind schläft.", "najn, DAN-ke. KÖN-ten zi BI-te di mu-ZIK ET-was LAJ-za MA-chen? majn kint szleft", "Nie, dziękuję. Czy mogłaby Pani trochę ściszyć muzykę? Moje dziecko śpi."],
          ["B", "Oh, das tut mir leid! Natürlich.", "o, das tut mir lajt! na-TÜR-lih", "Och, przepraszam! Oczywiście."],
          ["A", "Vielen Dank, das ist nett von Ihnen.", "FI-len dank, das ist net fon I-nen", "Bardzo dziękuję, to miło z Pani strony."],
          ["B", "Gern geschehen. Schönen Abend noch!", "gern ge-SZE-en. SZÖ-nen A-bent noh", "Nie ma za co. Miłego wieczoru!"]
        ],
        qs: [
          ["O co prosi sąsiad?", ["O pożyczenie narzędzi", "O ściszenie muzyki", "O pomoc ze schodami"], 1],
          ["Dlaczego?", ["Bo dziecko śpi", "Bo jest późno", "Bo jest chory"], 0],
          ["Jak reaguje sąsiadka?", ["Przeprasza i się zgadza", "Odmawia", "Zamyka drzwi"], 0]
        ]
      }
    },
    {
      id: "u25", lvl: "B1", tags: ["rozmowa"], title: "Meinung sagen", topic: "Wyrażanie opinii · dass-Sätze, stopniowanie",
      intro: "Rozmowa to nie tylko pytania i odpowiedzi, ale też opinie. Po „ich finde, dass” czasownik idzie na koniec. Do porównań używasz stopnia wyższego z „als” (niż).",
      rules: [
        "<b>Ich finde, dass das Essen sehr gut ist.</b> (ist na końcu po „dass”).",
        "<b>Meiner Meinung nach ist …</b> (moim zdaniem – czasownik zaraz po zwrocie).",
        "Zgoda: <b>Das sehe ich auch so. · Ich stimme dir zu. · Das stimmt.</b> · Sprzeciw: <b>Da bin ich anderer Meinung.</b>",
        "Stopień wyższy: <b>schön → schöner, groß → größer, gut → besser</b> + <b>als</b>: <b>Berlin ist größer als Hamburg.</b>",
        "Łagodzenie: <b>vielleicht</b> (może), <b>eigentlich</b> (właściwie)."
      ],
      ex: [
        ["Ich finde, dass das Essen sehr gut ist.", "ih FIN-de, das das E-sen zer gut ist", "Uważam, że jedzenie jest bardzo dobre."],
        ["Meiner Meinung nach ist Berlin schöner als Hamburg.", "MAJ-na MAJ-nung nach ist ber-LIN SZÖ-na als HAM-burk", "Moim zdaniem Berlin jest ładniejszy niż Hamburg."],
        ["Da bin ich anderer Meinung.", "da bin ih AN-de-rer MAJ-nung", "Mam inne zdanie."],
        ["Das sehe ich auch so.", "das ZE-e ih auch zo", "Też tak uważam."]
      ],
      words: [
        ["die Meinung", "di MAJ-nung", "opinia"], ["finden", "FIN-den", "uważać, znajdować"], ["glauben", "GLAU-ben", "sądzić, wierzyć"],
        ["zustimmen", "CU-sztim-men", "zgadzać się"], ["anderer Meinung", "AN-de-rer MAJ-nung", "innego zdania"], ["richtig / falsch", "RIH-tih / falsz", "prawidłowo / błędnie"],
        ["wichtig", "WIH-tih", "ważny"], ["besser", "BE-sa", "lepszy"], ["schöner", "SZÖ-na", "ładniejszy"],
        ["größer", "GRÖ-sa", "większy"], ["vielleicht", "fi-LAJHT", "może"], ["eigentlich", "AJ-gent-lih", "właściwie"]
      ],
      drill: [
        ["Ich finde, dass das Essen sehr gut ___.", ["sind", "ist", "sein"], 1, "dass → czasownik na końcu: ist"],
        ["___ Meinung nach ist das richtig.", ["Meiner", "Mein", "Meine"], 0, "Meiner Meinung nach"],
        ["Berlin ist größer ___ Hamburg.", ["wie", "dass", "als"], 2, "porównanie → als"],
        ["Da bin ich anderer ___.", ["Zeit", "Meinung", "Idee"], 1, "innego zdania → anderer Meinung"],
        ["Das Wetter ist heute ___ als gestern.", ["schön", "schöner", "am schönsten"], 1, "stopień wyższy → schöner"],
        ["Ich ___ dir zu.", ["stimme", "stimmst", "stimmt"], 0, "zustimmen: ich stimme … zu"]
      ],
      dialog: {
        title: "Dokąd na urlop?",
        lines: [
          ["A", "Wo sollen wir im Sommer Urlaub machen? Am Meer oder in den Bergen?", "wo ZO-len wir im ZO-ma UR-laup MA-chen? am mer O-da in den BER-gen", "Gdzie pojedziemy latem na urlop? Nad morze czy w góry?"],
          ["B", "Ich finde, dass das Meer schöner ist.", "ih FIN-de, das das mer SZÖ-na ist", "Uważam, że morze jest ładniejsze."],
          ["A", "Da bin ich anderer Meinung. In den Bergen ist es ruhiger.", "da bin ih AN-de-rer MAJ-nung. in den BER-gen ist es RU-i-ga", "Mam inne zdanie. W górach jest spokojniej."],
          ["B", "Stimmt, aber im Meer kann man schwimmen.", "sztimt, A-ba im mer kan man SZWI-men", "Prawda, ale w morzu można pływać."],
          ["A", "Vielleicht fahren wir erst ans Meer und dann in die Berge?", "fi-LAJHT FA-ren wir erst ans mer unt dan in di BER-ge", "Może pojedziemy najpierw nad morze, a potem w góry?"],
          ["B", "Das ist eine gute Idee!", "das ist AJ-ne GU-te i-DE", "To dobry pomysł!"]
        ],
        qs: [
          ["Kto uważa, że morze jest ładniejsze?", ["Pierwsza osoba", "Druga osoba", "Obie"], 1],
          ["Co jest zaletą gór według pierwszej osoby?", ["Są tańsze", "Jest spokojniej", "Są bliżej"], 1],
          ["Jaki jest kompromis?", ["Tylko góry", "Tylko morze", "Najpierw morze, potem góry"], 2]
        ]
      }
    }
  ],

  /* Lekcje, które zostaną dodane w kolejnych wersjach */
  soon: [
    ["B2", "Podatki i ubezpieczenia", "Rozmowa w urzędzie skarbowym i w kasie chorych"],
    ["B1", "Który / która…", "Zdania względne – der, die, das, den"],
    ["B1", "Mit dem Zug oder mit dem Auto?", "Przyimki i celownik – mit, bei, von"],
    ["B1", "Towar został dostarczony", "Strona bierna – wurde geliefert"],
    ["B2", "Prezentacja firmy", "Dłuższa wypowiedź, spójniki"],
    ["B2", "Negocjacje z klientem", "Argumentowanie, przekonywanie"],
    ["B2", "Trudna rozmowa", "Konflikt, przeprosiny, stanowczość"],
    ["B2", "Próbny egzamin", "Powtórka całego kursu (poziom Goethe B1/B2)"]
  ]
};
/* Lekcje układamy według poziomu (kolejność w obrębie poziomu zostaje taka, jak w pliku). */
(function(){ const R = {A1:1, A2:2, B1:3, B2:4}; window.KURS.units = window.KURS.units.map((u,i) => [u,i]).sort((a,b) => (R[a[0].lvl]-R[b[0].lvl]) || (a[1]-b[1])).map(x => x[0]); })();
