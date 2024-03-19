'use strict'

// Get Saved Datas
const getSavedDatas = () => {
    const datasJSON = localStorage.getItem('datas')
    try {
        return datasJSON ? JSON.parse(datasJSON) : []
    } catch (g) {
        return []
    }
}