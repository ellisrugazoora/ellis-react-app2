import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, TableCaption } from "@chakra-ui/table";

function TaBle(props){
    
    return (
        <div>
            {props.title}
            <Center>
            <TableContainer className="tablecdont" border={"0.5px outset"} borderRadius={"10px"} shadow={'lg'}>
                <Table variant='striped' colorScheme='twitter' size='sm'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    
                    <Thead>
                        <Tr>
                            {props.columns.map((col, colnum) => {
                                return (<Th>{col}</Th>)
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
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