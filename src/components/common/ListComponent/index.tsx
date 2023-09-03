import { Card } from 'components';
import DataGrid, {
    Column,
    Editing,
    GroupPanel,
    Grouping,
    IColumnProps,
    Pager,
    Paging,
    Selection,
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.material.blue.light.css';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';
// import Zoom from 'react-medium-image-zoom';
// import 'react-medium-image-zoom/dist/styles.css';

type Props<TData> = {
    columns: IColumnProps[];
    url?: string;
    content: TData[];
    selection?: boolean;
    onSelection?: (list: TData[]) => void;
    customURL?: (item: string) => string;
    editable?: boolean;
    editCol?: boolean;
    deleteCol?: boolean;
    setID?: any;
    imgCol?: boolean;
    mapCol?: boolean;
    detailCol?: boolean;
    downloadCol?: Boolean;
    downloadID?: any;
    deleteFunction?: any;
};

const ListComponent = <
    TData extends {
        image?: string | undefined;
        id?: number | undefined;
    },
>({
    downloadCol,
    downloadID,
    url,
    columns,
    content,
    selection,
    onSelection,
    deleteFunction,
    customURL,
    editable,
    editCol,
    deleteCol,
    setID,
    imgCol,
    mapCol,
    detailCol,
}: Props<TData>) => {
    const router = useRouter();
    const viewColumn = useMemo(
        () => (
            <Column
                dataField="Edit"
                cellRender={({
                    data,
                }: {
                    data: (typeof content)[number];
                }): JSX.Element => {
                    return (
                        <div
                            onClick={() => {
                                router.push(`${url}/${data.id}`);
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            {' '}
                            ✏️{' '}
                        </div>
                    );
                }}
            />
        ),
        [router, url],
    );
    const detailColumn = useMemo(
        () => (
            <Column
                dataField="Detail"
                cellRender={({
                    data,
                }: {
                    data: (typeof content)[number];
                }): JSX.Element => {
                    return (
                        <div
                            onClick={() => {
                                router.push(`${url}/details/${data.id}`);
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            📜
                        </div>
                    );
                }}
            />
        ),
        [router, url],
    );

    // const imageColumn = useMemo(
    //     () => (
    //         <Column
    //             dataField="Image"
    //             cellRender={({
    //                 data,
    //             }: {
    //                 data: (typeof content)[number];
    //             }): JSX.Element => {
    //                 return (
    //                     <div>
    //                         {data?.image ? (
    //                             <div style={{ width: '70px', height: '70px' }}>
    //                                 <Zoom zoomMargin={280}>
    //                                     <Image
    //                                         alt={'Product Image '}
    //                                         src={data?.image ?? ''}
    //                                         width={70}
    //                                         height={70}
    //                                         objectFit="contain"
    //                                         layout="responsive"
    //                                         style={{
    //                                             width: '100%',
    //                                             height: '100%',
    //                                             maxWidth: '100%',
    //                                             maxHeight: '100%',
    //                                             padding: 10,
    //                                         }}
    //                                     />{' '}
    //                                 </Zoom>
    //                             </div>
    //                         ) : (
    //                             ' No Image'
    //                         )}
    //                     </div>
    //                 );
    //             }}
    //         />
    //     ),
    //     [],
    // );
    const downloadColumn = useMemo(
        () => (
            <Column
                dataField="Download"
                cellRender={({
                    data,
                }: {
                    data: (typeof content)[number];
                }): JSX.Element => {
                    return (
                        <div>
                            <div
                                onClick={() => {
                                    downloadID(data.id);
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                📥
                            </div>
                        </div>
                    );
                }}
            />
        ),
        [downloadID],
    );
    const mapColumn = useMemo(
        () => (
            <Column
                dataField="Mapping"
                cellRender={({
                    data,
                }: {
                    data: (typeof content)[number];
                }): JSX.Element => {
                    return (
                        <div
                            onClick={() => {
                                router.push(`${url}/mapping/${data.id}`);
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            📜
                        </div>
                    );
                }}
            />
        ),
        [router, url],
    );
    const deleteColumn = useMemo(
        () => (
            <Column
                dataField="Delete"
                cellRender={({
                    data,
                }: {
                    data: (typeof content)[number];
                }): JSX.Element => {
                    return (
                        <div
                            onClick={() => {
                                // setID(data.id);
                                deleteFunction(data.id);
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            ❌
                        </div>
                    );
                }}
            />
        ),
        [deleteFunction, setID],
    );
    return (
        <Card>
            <DataGrid
                showBorders={true}
                dataSource={content}
                hoverStateEnabled={true}
                allowColumnReordering={true}
                rowAlternationEnabled={true}
                onSelectionChanged={({ selectedRowsData }) => {
                    if (onSelection) {
                        onSelection(selectedRowsData);
                    }
                }}
            >
                {editable ? (
                    <Editing allowUpdating={true} allowDeleting={true} mode="cell" />
                ) : null}
                <GroupPanel visible={true} />
                <Grouping autoExpandAll={false} />
                {selection && <Selection mode={'multiple'} allowSelectAll />}
                {columns.map((item, index) => (
                    <Column
                        alignment={'left'}
                        allowEditing={true}
                        {...item}
                        key={index}
                    />
                ))}
                {downloadCol ? downloadColumn : null}
                {/* {imgCol ? imageColumn : null} */}
                {detailCol ? detailColumn : null}
                {mapCol ? mapColumn : null}
                {editCol ? viewColumn : null}
                {deleteCol ? deleteColumn : null}
                <Pager
                    allowedPageSizes={[10, 25, 50, 100]}
                    showPageSizeSelector={true}
                />
                <Paging defaultPageSize={10} />
            </DataGrid>
        </Card>
    );
};

export const List = memo(ListComponent);