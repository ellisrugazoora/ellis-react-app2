import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";

function TaBle(props){
    
    return (
        <div>
            
            Table:
            <Center>
            <TableContainer className="tablecont" border={"0.5px outset"} borderRadius={"10px"}>
                <Table variant='striped' colorScheme='teal' size='sm'>
                    <Thead>
                        <Tr>
                            {props.columns.map((col, colnum) => {
                                return (<Th>{col}</Th>)
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                            {/* {Object.entries(TestObject_col).map((row, rownum) => {
                                return (
                                    <Tr>{row[1].map((data, rownum) => {
                                        return (<Td>{data}</Td>)
                                    })}</Tr>
                                )
                            })} */}
                            {
                                Object.entries(props.data).map((row, rownum) => {
                                    return (<Tr>{Object.entries(row[1]).map((col, colnum) => {
                                        return (<Td>{col[1]}</Td>)
                                    })}</Tr>)
                                })
                            }
                            
                    </Tbody>
                </Table>
            </TableContainer>
            </Center>
        </div>
    )
}

export default TaBle;