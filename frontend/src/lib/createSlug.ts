import slugify from "slugify"


export function createSlug(text: string) {
    const slug = slugify(text, {
        lower: true,
        strict: true, // 특수문자 제거
        locale: 'ko'  // 한글도 어느 정도 지원
    })

    return slug
}