const WORKS1 = [
    {
        image:    './img/featured-works/work-2.webp',
        date:     "oct '24",
        index:    'INDEX.01',
        cat_key:  'cat-recovery',
        title_nl: 'Bosscène',
        title_en: 'Forest Scene',
        desc_nl:  'Een persoonlijk omgevingsstuk dat dichte jungleatmosferen en volumetrische belichting verkent.',
        desc_en:  'A personal environment piece exploring dense jungle atmospheres and volumetric lighting.',
        tag1_nl:  'Omgeving',
        tag1_en:  'Environment',
        tag2:     '3D Render',
        tag3_nl:  'Sfeervol',
        tag3_en:  'Atmospheric',
    },
    {
        image:    './img/featured-works/work.webp',
        date:     "oct '24",
        index:    'INDEX.02',
        cat_key:  'cat-mystic',
        title_nl: 'Mystieke Tuin',
        title_en: 'Mystic Garden',
        desc_nl:  'Een persoonlijk omgevingsstuk dat dichte jungleatmosferen en volumetrische belichting verkent.',
        desc_en:  'A personal environment piece exploring dense jungle atmospheres and volumetric lighting.',
        tag1_nl:  'Natuur',
        tag1_en:  'Nature',
        tag2:     '3D Render',
        tag3_nl:  'Cinematisch',
        tag3_en:  'Cinematic',
    },
    {
        image:    './img/featured-works/work3.webp',
        date:     "oct '24",
        index:    'INDEX.03',
        cat_key:  'cat-ancient',
        title_nl: 'Oud Pad',
        title_en: 'Ancient Path',
        desc_nl:  'Een persoonlijk omgevingsstuk dat dichte jungleatmosferen en volumetrische belichting verkent.',
        desc_en:  'A personal environment piece exploring dense jungle atmospheres and volumetric lighting.',
        tag1_nl:  'Architectuur',
        tag1_en:  'Architecture',
        tag2:     '3D Render',
        tag3_nl:  'Sfeervol',
        tag3_en:  'Moody',
    },
];

const WORKS2 = [
    {
        image:    './img/featured-works/work-3.webp',
        date:     "oct '24",
        index:    'INDEX.01',
        cat_key:  'cat-recovery',
        title_nl: 'Bosscène',
        title_en: 'Forest Scene',
        desc_nl:  'Een persoonlijk omgevingsstuk dat dichte jungleatmosferen en volumetrische belichting verkent.',
        desc_en:  'A personal environment piece exploring dense jungle atmospheres and volumetric lighting.',
        tag1_nl:  'Omgeving',
        tag1_en:  'Environment',
        tag2:     '3D Render',
        tag3_nl:  'Sfeervol',
        tag3_en:  'Atmospheric',
    },
    {
        image:    './img/featured-works/work-2.webp',
        date:     "oct '24",
        index:    'INDEX.02',
        cat_key:  'cat-mystic',
        title_nl: 'Mystieke Tuin',
        title_en: 'Mystic Garden',
        desc_nl:  'Een persoonlijk omgevingsstuk dat dichte jungleatmosferen en volumetrische belichting verkent.',
        desc_en:  'A personal environment piece exploring dense jungle atmospheres and volumetric lighting.',
        tag1_nl:  'Natuur',
        tag1_en:  'Nature',
        tag2:     '3D Render',
        tag3_nl:  'Cinematisch',
        tag3_en:  'Cinematic',
    },
    {
        image:    './img/featured-works/work-4.webp',
        date:     "oct '24",
        index:    'INDEX.03',
        cat_key:  'cat-ancient',
        title_nl: 'Oud Pad',
        title_en: 'Ancient Path',
        desc_nl:  'Een persoonlijk omgevingsstuk dat dichte jungleatmosferen en volumetrische belichting verkent.',
        desc_en:  'A personal environment piece exploring dense jungle atmospheres and volumetric lighting.',
        tag1_nl:  'Architectuur',
        tag1_en:  'Architecture',
        tag2:     '3D Render',
        tag3_nl:  'Sfeervol',
        tag3_en:  'Moody',
    },
];

function buildTrackHTML(worksArray, lang, translations) {
    const t = translations[lang];
    return worksArray.map((w, i) => {
        const title   = lang === 'nl' ? w.title_nl : w.title_en;
        const desc    = lang === 'nl' ? w.desc_nl  : w.desc_en;
        const tag1    = lang === 'nl' ? w.tag1_nl  : w.tag1_en;
        const tag3    = lang === 'nl' ? w.tag3_nl  : w.tag3_en;
        const catText = t[w.cat_key] || w.cat_key;

        return `<div class="featured-work-item" style="background-image: url(${w.image});" data-work-id="${i + 1}" data-overlay-title="${title}" data-overlay-desc="${desc}">
    <div class="work-item-top-shadow"></div>
    <div class="work-item-top-info">
        <h3 class="work-item-top-info-category">${w.index} <span>${catText}</span></h3>
        <h3 class="work-item-top-info-data">${w.date}</h3>
    </div>
    <div class="work-item-bottom-info">
        <h2 class="work-item-bottom-info-title">${title}</h2>
        <div class="work-item-bottom-info-tags">
            <p>${tag1}</p>
            <div class="tag-divider-circle"></div>
            <p>${w.tag2}</p>
            <div class="tag-divider-circle"></div>
            <p>${tag3}</p>
        </div>
    </div>
    <div class="work-item-bottom-shadow"></div>
</div>`;
    }).join('\n');
}
