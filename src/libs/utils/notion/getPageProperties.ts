import { getTextContent, getDateValue } from "notion-utils"
import { NotionAPI } from "notion-client"
import { BlockMap, CollectionPropertySchemaMap } from "notion-types"
import { customMapImageUrl } from "./customMapImageUrl"

async function getPageProperties(
  id: string,
  block: BlockMap,
  schema: CollectionPropertySchemaMap,
  recordMap?: any
) {
  const api = new NotionAPI()
  let blockValue = block?.[id]?.value as any
  if (blockValue?.value) {
    blockValue = blockValue.value
  }
  const rawProperties = Object.entries(blockValue?.properties || [])
  const excludeProperties = ["date", "select", "multi_select", "person", "file"]
  const properties: any = {}
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val]: any = rawProperties[i]
    properties.id = id
    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val)
    } else {
      switch (schema[key]?.type) {
        case "file": {
          try {
            const url: string = val[0][1][0][1]
            const newurl = customMapImageUrl(url, blockValue)
            properties[schema[key].name] = newurl
          } catch (error) {
            properties[schema[key].name] = null
          }
          break
        }
        case "date": {
          const dateProperty: any = getDateValue(val)
          delete dateProperty.type
          properties[schema[key].name] = dateProperty
          break
        }
        case "select": {
          const selects = getTextContent(val)
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(",")
          }
          break
        }
        case "multi_select": {
          const selects = getTextContent(val)
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(",")
          }
          break
        }

        //26.04.26 author 정보 로딩실패 해결
        //게시글에 작성자 표시 안하도록 수정
        //인증되지 않은 사용자가 사용자 정보까지 가져오는걸 막은것으로 보임
        case "person": {
          // const rawUsers = val.flat()

          // const users = []
          // for (let i = 0; i < rawUsers.length; i++) {
          //   if (rawUsers[i][0][1]) {
          //     const userId = rawUsers[i][0][1]
          //     const userValue = recordMap?.notion_user?.[userId]?.value

          //     const user = {
          //       id: userValue?.id ?? null,
          //       name: userValue?.name ??
          //         (userValue?.family_name || userValue?.given_name
          //           ? `${userValue?.family_name ?? ''}${userValue?.given_name ?? ''}`
          //           : null),
          //       profile_photo: userValue?.profile_photo ?? null,
          //     }
          //     users.push(user)
          //   }
          // }
          // properties[schema[key].name] = users
          // break
          properties[schema[key].name] = []
          break
        }
        default:
          break
      }
    }
  }
  const sanitized = JSON.parse(
    JSON.stringify(properties, (_, value) =>
      value === undefined ? null : value
    )
  )
  return sanitized
}

export { getPageProperties as default }
