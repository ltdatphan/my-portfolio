import type { StructureResolver } from 'sanity/structure'

import { FaBuilding } from 'react-icons/fa'
import { FaFileCode } from 'react-icons/fa6'

export const structure: StructureResolver = (S) =>
    S.list()
        .id('root')
        .title('Content')
        .items([
            S.documentTypeListItem('experience')
                .title('Experiences')
                .icon(FaBuilding),
            S.documentTypeListItem('project')
                .title('Projects')
                .icon(FaFileCode),
        ])
