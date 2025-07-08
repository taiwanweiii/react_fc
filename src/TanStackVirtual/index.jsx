import { Virtuoso } from "react-virtuoso";
/*
    套件:Virtuoso
    
    用法
        <div style={{ height: "400px" }}>
            <TanStackVirtual
                totalCount={9999}
                data={data}
                renderItem={renderItem}
            />
        </div>
*/
export default ({
    data = null,
    renderItem,
    firstItemIndex = 0,
    initialTopMostItemIndex = 0,
    totalCount = 0,
}) => {
    if (totalCount > 0) {
        return (
            <>
                <Virtuoso
                    style={{ height: "100%" }} // 容器固定高度，才會觸發滾動
                    totalCount={totalCount}
                    firstItemIndex={firstItemIndex} //若你的資料不是從 index=0 開始，用這個設定起始 index
                    initialTopMostItemIndex={initialTopMostItemIndex} //一開始顯示的 index（例如滾到某一筆）
                    itemContent={index => renderItem(index)}
                />
            </>
        );
    }
    return (
        <>
            <Virtuoso
                style={{ height: "100%" }} // 容器固定高度，才會觸發滾動
                data={data}
                firstItemIndex={firstItemIndex} //若你的資料不是從 index=0 開始，用這個設定起始 index
                initialTopMostItemIndex={initialTopMostItemIndex} //一開始顯示的 index（例如滾到某一筆）
                itemContent={(index, item) => renderItem(item, index)}
            />
        </>
    );
};
