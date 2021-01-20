/**
 * 表格分页
 * @param dataList
 * @param dataObjList
 * @param page
 * @param PageSize
 * @returns {Promise<{rows: any[], count: number}>}
 */
module.exports = (dataList, dataObjList = [], page = 1, PageSize = 10) => {
    // 是否有关联对象
    if(dataObjList.length) {
        return dataList.findAndCountAll({include: dataObjList, offset: page * PageSize, limit: Number(PageSize)});
    } else {
        return dataList.findAndCountAll({offset: page * PageSize, limit: Number(PageSize)});
    }
};
