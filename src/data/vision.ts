// ── Vision Data ─────────────────────────────────────────

export interface DataStripItem {
  num: string;
  sup: string;
  label: string;
}

export interface PyramidLevel {
  rank: string;
  ordinal: string;
  title: string;
  desc: string;
}

export interface Pillar {
  icon: string;
  title: string;
  desc: string;
}

export interface Thinker {
  era: string;
  title: string;
  desc: string;
}

export interface Pullquote {
  text: string;
  cite: string;
}

export interface VisionChapter {
  num: string;
  title: string;
  paragraphs: string[];
  pullquotes: Pullquote[];
  photoIndex?: number;
  continuedParagraphs?: string[];
  continuedPullquotes?: Pullquote[];
}

export interface VisionData {
  kicker: string;
  title: string;
  titleEm: string;
  subtitle: string;
  mantra: {
    label: string;
    text: string;
    cite: string;
  };
  chapters: VisionChapter[];
  dataStrip: DataStripItem[];
  pyramid: PyramidLevel[];
  intellectualSources: string;
  pillars: Pillar[];
  thinkers: Thinker[];
  closingDeclaration: {
    lines: string[];
    source: string;
  };
}

export const visionData: VisionData = {
  kicker: "La visión",
  title: "ARGENTINA SERÁ",
  titleEm: "el país más libre del mundo",
  subtitle:
    "No vine a administrar decadencia. Vine a refundar la Argentina sobre la libertad, la propiedad privada y la cooperación social voluntaria.",
  mantra: {
    label:
      "Alberto Benegas Lynch (h) — el contrato social que elegimos los argentinos",
    text: "«El liberalismo es el respeto irrestricto del proyecto de vida del prójimo, basado en el principio de no agresión, en defensa del derecho a la vida, a la libertad y a la propiedad, donde solo se puede ser exitoso sirviendo al prójimo con bienes de mejor calidad a un mejor precio.»",
    cite: "Citado en el discurso de asunción, 10 de diciembre de 2023",
  },
  chapters: [
    {
      num: "I",
      title: "El proyecto de la libertad",
      paragraphs: [
        "En 1853, **Juan Bautista Alberdi** escribió las *Bases y puntos de partida para la organización política de la República Argentina* — el proyecto institucional más ambicioso del hemisferio sur. La Constitución de 1853, de fuerte raigambre liberal, consagró la propiedad privada, la libertad de comercio, la inmigración abierta y un Estado limitado. El resultado fue la transformación económica más veloz que el mundo haya visto.",
        "En apenas 35 años, la Argentina pasó de ser un territorio despoblado y empobrecido a ubicarse entre las diez economías más grandes del planeta. Para 1895, el PBI per cápita argentino superaba al de Francia, Alemania e Italia. Buenos Aires rivalizaba con París y Nueva York. Entre 1860 y 1930 llegaron más de seis millones de inmigrantes — italianos, españoles, alemanes, polacos — atraídos por la promesa de un país donde el mérito y la libertad determinaban el destino de cada persona. La Argentina era el faro de luz de Occidente.",
        "Después vino la catástrofe. A partir de la década del 30, la dirigencia abandonó el modelo que nos había hecho ricos y abrazó las ideas empobrecedoras del colectivismo. Cada gobierno agrandó el Estado, creó nuevas regulaciones, aumentó el gasto público. El resultado: más de cien años de decadencia ininterrumpida. Un país que en 1910 tenía el mismo PBI per cápita que Estados Unidos fue cayendo, década tras década, hasta ubicarse en el puesto 140 del ranking mundial de libertad económica — detrás de Angola, Liberia y Chad.",
        "Mi proyecto no es administrar esa decadencia. **Es dinamitarla y refundar la Argentina sobre las ideas que la hicieron grande.** Cada decisión de gobierno se mide contra una sola pregunta: **¿esto nos acerca a ser el país más libre del mundo?** Si la respuesta es no, esa política no se implementa. No hay medias tintas. No hay gradualismo. Se hace o no se hace.",
      ],
      pullquotes: [
        {
          text: "«Hoy volvemos a abrazar las ideas de Alberdi, de nuestros padres fundadores, que hicieron que en 35 años pasáramos de ser un país de bárbaros a ser potencia.»",
          cite: "Discurso de asunción, diciembre 2023",
        },
      ],
      photoIndex: 0,
    },
    {
      num: "II",
      title: "Capitalismo y moralidad",
      paragraphs: [
        "**El capitalismo de libre empresa no solo es el sistema más productivo de la historia de la humanidad — es el único sistema moralmente deseable.** El único basado enteramente en el intercambio voluntario y el principio de no agresión. Desde que se adoptó el capitalismo, el mundo pasó de la miseria generalizada a la mayor explosión de prosperidad jamás registrada: el PBI per cápita mundial se multiplicó por 15 en apenas 200 años, y más de 2.000 millones de personas salieron de la pobreza extrema.",
        "Como planteó **Israel Kirzner**, los socialistas ya no niegan que el capitalismo funciona — porque los datos son irrefutables. Lo que hacen es acusarlo de inmoral. Entonces la verdadera batalla de nuestro tiempo no es económica — es moral. El socialismo fracasó en todos los países donde se implementó: la Unión Soviética, Cuba, Venezuela, Corea del Norte. Produjo más de 100 millones de muertos en el siglo XX. Y sin embargo sus defensores siguen ocupando las cátedras, los medios y los organismos internacionales. Hay que defender al capitalismo no solo por sus resultados, sino por su esencia: es el sistema que respeta la dignidad del individuo porque no requiere coerción alguna.",
        "El capitalista exitoso no se apropia de la riqueza ajena — contribuye al bienestar general. **Un empresario exitoso es un héroe, un benefactor social** que solo puede prosperar sirviendo al prójimo con mejores bienes a mejor precio. Bill Gates sacó a más gente de la pobreza que todos los organismos internacionales juntos. Que nadie les diga que su ambición es inmoral: la ambición de servir al prójimo es la forma más noble de cooperación humana.",
      ],
      pullquotes: [
        {
          text: "«El capitalista, el empresario exitoso, es un benefactor social que, lejos de apropiarse de la riqueza ajena, contribuye al bienestar general. No les dejen decir que su ambición es inmoral.»",
          cite: "Davos, enero 2024",
        },
      ],
      continuedParagraphs: [
        "**«Maquiavelo ha muerto.»** Durante años se nos deformó el pensamiento con un falso dilema: que al diseñar políticas públicas había que optar entre la eficiencia política y el respeto a los valores éticos y morales de Occidente. **Jesús Huerta de Soto** demostró que esa oposición es falsa y errónea: la eficiencia dinámica surge única y exclusivamente del respeto a la propiedad privada y la función empresarial. Y como probó **Friedrich Hayek**, el conocimiento está disperso en la sociedad — ningún planificador central puede reemplazar al orden espontáneo del mercado libre.",
        "**Lo justo no puede ser ineficiente ni lo eficiente injusto.** Justicia y eficiencia son dos caras de la misma moneda. Dado el vínculo profundo entre la moral y los mercados libres, estos últimos nos hacen mejores personas. Los mercados dinámicamente eficientes no solo generan prosperidad — cultivan la virtud.",
      ],
      continuedPullquotes: [
        {
          text: "«Al momento de diseñarse las políticas públicas resulta inadmisible, desde el punto de vista de la ética y la moral, sacrificar la justicia en el altar de la eficiencia.»",
          cite: "Davos, enero 2026",
        },
      ],
      photoIndex: 1,
    },
    {
      num: "III",
      title: "El Estado es el problema",
      paragraphs: [
        "En 1944, **Friedrich Hayek** lo advirtió en *Camino de Servidumbre*: cada intervención del Estado genera distorsiones que justifican nuevas intervenciones, en una espiral que no se detiene hasta que la libertad desaparece por completo. Lo que Hayek describió como teoría, la Argentina lo vivió como pesadilla durante más de cien años.",
        "Desde la primera presidencia de Perón en 1946 hasta diciembre de 2023, el gasto público pasó del 15 % del PBI al 42 %. Se crearon más de 600 organismos estatales. La carga impositiva se multiplicó por tres. Cada gobierno agrandó el Estado un poco más, reguló un poco más, gastó un poco más — y la decadencia se profundizó un poco más. Es la espiral perversa que Hayek predijo: la intervención genera un problema, y el político propone más intervención como solución. El resultado siempre es el mismo: más poder para la casta, menos libertad para la gente.",
        "Los impuestos se cobran de manera coactiva. A mayor carga impositiva, mayor coacción y menor libertad. La presión tributaria argentina llegó a superar el 29 % del PBI — niveles nórdicos sin servicios nórdicos. **No existen las fallas de mercado.** El mercado es un mecanismo de cooperación social donde se intercambian voluntariamente derechos de propiedad. La intromisión del Estado mete ruido en el sistema de precios — cuanto más Estado hay, más distorsión hay y peor funciona todo.",
        "Hoy los Estados no necesitan controlar directamente los medios de producción para imponer el socialismo. Lo hacen a través de emisión monetaria, deuda pública, subsidios, controles de precios y regulaciones asfixiantes. La Argentina llegó a tener 67.000 regulaciones vigentes — más que Francia y España combinadas. El resultado es idéntico: se destruyen los incentivos, se castiga al que produce y se premia al que vive del erario. **Las funciones del Estado deben limitarse a la defensa del derecho a la vida, a la libertad y a la propiedad.** Nada más. Todo lo demás es coacción disfrazada de política pública.",
      ],
      pullquotes: [
        {
          text: "«El Estado no es la solución. El Estado es el problema mismo. No cedan al avance del Estado.»",
          cite: "Davos, enero 2024",
        },
      ],
    },
    {
      num: "IV",
      title: "La batalla cultural",
      paragraphs: [
        "La gran gesta para cambiar la Argentina tiene tres frentes de batalla que, si bien son distintos el uno del otro, **son igualmente indispensables.** Sin los tres, el cambio no es sostenible. Sin los tres, el colectivismo vuelve.",
        "La década del 90 es la prueba. Carlos Menem implementó reformas económicas profundas — privatizaciones, apertura comercial, convertibilidad — y sin embargo la izquierda logró revertirlas todas en pocos años. El colectivismo no volvió porque las reformas fracasaron; volvió porque la izquierda nunca perdió la hegemonía cultural. Mantuvieron el control de las universidades, los medios y el relato histórico. Cuando la crisis de 2001 golpeó, el pueblo no culpó al gasto descontrolado ni a la rigidez cambiaria: culpó al liberalismo. Así de poderosa es la batalla cultural.",
        "**Antonio Gramsci** escribió desde la cárcel en los años 30 que para implantar el socialismo era necesario primero conquistar la cultura — la educación, los medios de comunicación, el arte, el lenguaje cotidiano. La izquierda lo hizo al pie de la letra durante 80 años. Se metieron en las universidades, se metieron en los medios, se metieron en la cultura. Capturaron las instituciones que forman el sentido común de una sociedad entera. **La batalla cultural fue ganada por la izquierda básicamente porque nosotros no dimos la batalla.** Avanzaron sobre un terreno virgen, sin rival, y esas ideas se instalaron en la mente de millones como parásitos mentales.",
      ],
      pullquotes: [
        {
          text: "«Sin el cuidado de las ideas, no importa qué tan buenos seamos gestionando o cuán buenos seamos políticamente, no vamos a llegar a ningún lado.»",
          cite: "CPAC Argentina, diciembre 2024",
        },
      ],
      continuedParagraphs: [
        "Por eso mi gobierno pelea en **tres frentes simultáneos**:",
        "**Dar la batalla cultural desde el poder no solo es recomendable — es una obligación.** Las ideas no ganan por mérito propio: deben ser promovidas activamente. La izquierda es la prueba viviente de que las ideas más terribles pueden triunfar culturalmente si tienen un buen marketing. Imaginen cuánto tenemos por ganar nosotros, que tenemos ideas que sí funcionan.",
        "Gracias a internet y la creatividad popular, las redes sociales rompieron el monopolio comunicacional de la izquierda. La juventud ya lo entendió: millones de jóvenes argentinos defienden hoy la libertad, el mérito y la propiedad privada. **Una victoria política no es el fin de la lucha por las ideas, sino el comienzo.** El apoyo social hace a nuestras reformas sostenibles en el tiempo — esa es la semilla que garantiza que Argentina no vuelva atrás.",
      ],
      photoIndex: 2,
    },
    {
      num: "V",
      title: "La defensa de Occidente",
      paragraphs: [
        "**Occidente está en peligro.** Está en peligro porque aquellos que supuestamente deben defender sus valores — los líderes políticos, los académicos, los organismos internacionales — se encuentran cooptados por una visión del mundo que, inexorablemente, conduce al socialismo y a la pobreza.",
        "Los principales líderes del mundo occidental abandonaron el modelo de la libertad por distintas versiones del colectivismo. Europa lleva décadas asfixiando a sus ciudadanos con regulaciones, impuestos confiscatorios y un Estado de bienestar que destruye los incentivos productivos. Estados Unidos acumuló una deuda de más de 36 billones de dólares. América Latina sigue atrapada en el péndulo entre populismo y socialdemocracia. El resultado está a la vista: estancamiento, deuda impagable y una ciudadanía cada vez más dependiente del Estado.",
        "Y sin embargo, Occidente representa el pico de la civilización humana. Durante 2.500 años, a partir de cuatro fuentes — **la filosofía griega, el derecho romano, la rectitud de los estoicos y los valores judeocristianos** — Occidente construyó el edificio institucional que hizo posible la ciencia, el arte, la medicina, la tecnología y la libertad individual. Esa tradición tuvo su síntesis definitiva en el liberalismo clásico: el sistema que convirtió al individuo en soberano de su propio destino y produjo la mayor explosión de prosperidad en la historia de la especie humana.",
        "Hoy, el virus mental de la ideología woke ataca esos cimientos desde adentro. Feminismo radical, ecologismo fanático, ideología de género, neo-marxismo disfrazado de justicia social — todas cabezas de una misma criatura cuyo fin es justificar el avance del Estado sobre la vida privada de las personas. **La paz nos volvió débiles. La prosperidad nos hizo complacientes.** Las generaciones que no conocieron el horror del totalitarismo — que nunca vieron los gulags, los campos de concentración ni las hambrunas planificadas — olvidaron por qué la libertad es un bien que debe defenderse con uñas y dientes, todos los días, sin descanso.",
      ],
      pullquotes: [
        {
          text: "«Occidente está en peligro, y quienes deberían defenderlo lo están abandonando.»",
          cite: "Davos, enero 2024",
        },
      ],
      continuedParagraphs: [
        "A partir del 10 de diciembre de 2023, la República Argentina abandonó la posición de neutralidad histórica y se puso a la vanguardia de la lucha en defensa de la libertad. Estamos construyendo una alianza internacional de naciones libres — desde Washington hasta Jerusalén, desde Roma hasta Brasilia — porque la única forma de combatir el mal organizado es con el bien organizado. No se trata de una cruzada abstracta: se trata de preservar el legado civilizatorio que hizo posible la prosperidad, la ciencia, el arte y la dignidad del individuo.",
        "**América será el faro de luz que vuelva a encender a todo Occidente**, y con ello pagará su deuda civilizatoria como muestra de gratitud hacia las raíces que la hicieron posible. No vamos a parar hasta convertirnos en el país más libre del mundo. Y cuando lo logremos, el ejemplo argentino será la prueba definitiva de que las ideas de la libertad no son una utopía — son el único camino que funciona.",
      ],
      photoIndex: 3,
    },
  ],
  dataStrip: [
    { num: "1", sup: "°", label: "PBI per cápita\nmundial en 1895" },
    { num: "35", sup: "", label: "Años bastaron para\nser top 10 mundial" },
    { num: "100", sup: "+", label: "Años de decadencia\ncolectivista" },
    {
      num: "140",
      sup: "°",
      label: "Puesto en libertad\neconómica al que caímos",
    },
  ],
  pyramid: [
    {
      rank: "1°",
      ordinal: "Primero",
      title: "Ética y moral",
      desc: "Filosofía griega, derecho romano, rectitud de los estoicos, valores judeocristianos. Cada decisión de gobierno debe pasar primero el test moral: ¿es justa? Lo que es injusto no puede ser eficiente. Lo que viola derechos individuales no puede ser política pública.",
    },
    {
      rank: "2°",
      ordinal: "Segundo",
      title: "Eficiencia dinámica",
      desc: "Cuando el marco institucional es justo, la eficiencia es su consecuencia natural — no su rival. Como demostró Jesús Huerta de Soto, la función empresarial es el principal motor del desarrollo: descubre oportunidades que ningún planificador central puede anticipar ni replicar.",
    },
    {
      rank: "3°",
      ordinal: "Tercero",
      title: "Resultado político",
      desc: "Cuando hay tensión entre ética y resultado político, la política debe descartarse — aún cuando sirva electoralmente. Las ideas no se negocian por votos: se defienden con convicción.",
    },
  ],
  intellectualSources:
    "**Las fuentes intelectuales.** Este orden de prioridades no es invención nuestra — es la síntesis de una tradición de pensamiento que va desde Aristóteles y Cicerón hasta la Escuela Austríaca de Economía. Los nombres clave: **Carl Menger, Ludwig von Mises, Friedrich Hayek, Murray Rothbard, Israel Kirzner, Jesús Huerta de Soto, Alberto Benegas Lynch (h).**",
  pillars: [
    {
      icon: "⚙",
      title: "Gestión",
      desc: "Diseñar e implementar las reformas profundas que el país necesita. Achicar el Estado, eliminar regulaciones, equilibrar las cuentas. Demostrar con hechos — con resultados tangibles en el bolsillo de la gente — que el liberalismo es el camino a la prosperidad.",
    },
    {
      icon: "⚖",
      title: "Política",
      desc: "Construir el poder institucional necesario para impulsar las reformas y blindarlas de la reversión. El mal organizado solo puede ser vencido por el bien organizado. Los lugares que no ocupamos los ocupa la izquierda.",
    },
    {
      icon: "★",
      title: "Cultura",
      desc: "La batalla por las almas. Ganar la disputa de las ideas para que los cambios sean permanentes y sean los propios ciudadanos quienes defiendan su libertad. Es el campo donde se distingue el bien del mal — y donde se define si una nación prospera o retrocede.",
    },
  ],
  thinkers: [
    {
      era: "Fundamentos",
      title: "Filosofía griega",
      desc: "Desde Sócrates, Platón y Aristóteles: la razón como instrumento de conocimiento, la búsqueda de la verdad y la virtud como fin supremo del hombre libre.",
    },
    {
      era: "Instituciones",
      title: "Derecho romano",
      desc: "De la Ley de las XII Tablas al Corpus Iuris Civilis: el imperio de la ley, la propiedad privada y el contrato como pilares de la convivencia civilizada.",
    },
    {
      era: "Carácter",
      title: "Rectitud estoica",
      desc: "Marco Aurelio, Séneca, Epicteto: el deber, la disciplina interior y la responsabilidad individual como ejes de una vida digna y soberana.",
    },
    {
      era: "Valores",
      title: "Tradición judeocristiana",
      desc: "La sacralidad de la persona, la libertad de conciencia y la igualdad ante Dios y ante la ley — la raíz moral de los derechos individuales.",
    },
  ],
  closingDeclaration: {
    lines: ["ARGENTINA SERÁ", "EL PAÍS MÁS *libre*", "DEL MUNDO"],
    source: "Viva la libertad, carajo!",
  },
};
