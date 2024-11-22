import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Modal,
} from "@mui/material"; 
import dummyData from "../constants/dummy.json"; // 기본 데이터 가져오기

const InqueryList = () => {
    const [formDataList, setFormDataList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState("");

    useEffect(() => {
        // localStorage에서 데이터 가져오기
        const storedData = JSON.parse(localStorage.getItem("formDataList"));
        if (storedData && storedData.length > 0) {
            // localStorage 데이터가 있으면 사용
            setFormDataList(storedData);
        } else {
            // localStorage에 데이터가 없으면 기본 데이터 저장 및 사용
            localStorage.setItem("formDataList", JSON.stringify(dummyData));
            setFormDataList(dummyData);
        }
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            const updatedData = formDataList.filter((entry) => entry.id !== id);
            localStorage.setItem("formDataList", JSON.stringify(updatedData));
            setFormDataList(updatedData);
            alert("성공적으로 삭제되었습니다.");
        }
    };

    const handleReset = () => {
        localStorage.removeItem("formDataList"); // 로컬스토리지에서 데이터 삭제
        window.location.reload(); // 새로고침
    };
    

    const handleMoreClick = (details) => {
        setSelectedDetail(details);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedDetail("");
    };

    if (formDataList.length === 0) {
        return (
            <Box sx={{ textAlign: "center", padding: "2rem" }}>
                <Typography variant="h6">저장된 문의 내역이 없습니다.</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ padding: "4rem", display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "80vw" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography
                        variant="h4"
                        fontWeight={900}
                        marginBottom="2rem"
                        marginTop="2rem"
                        fontFamily="Noto Sans KR"
                    >
                        문의 내역
                    </Typography>
                    <Button 
                        variant="contained"
                        color="warning"
                        onClick={handleReset}
                        sx={{height: '3rem'}}
                    >데이터 초기화</Button>
                </Box>

                <TableContainer component={Paper} elevation={3}>
                    <Table>
                        <TableHead
                            sx={{
                                backgroundColor: "#333",
                            }}
                        >
                            <TableRow>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1.5rem",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    ID
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1.5rem",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    이름
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1.5rem",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    핸드폰 번호
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1.5rem",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    주소
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1.5rem",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    광고 경험
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1.5rem",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    광고 매체
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1.5rem",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    상세 문의
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1.5rem",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    삭제
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {formDataList.map((entry) => (
                                <TableRow key={entry.id}>
                                    {/* ID */}
                                    <TableCell align="center" 
                                        sx={{ 
                                            backgroundColor: "#EFEFEF",
                                            transition: 'all 0.1s ease-out;',
                                            "&:hover": {
                                                fontWeight: '900',
                                                backgroundColor: 'white'
                                            },
                                        }}>
                                        {entry.id}
                                    </TableCell>
                                    {/* 이름 */}
                                    <TableCell align="center" sx={{ 
                                            backgroundColor: "#EFEFEF",
                                            transition: 'all 0.1s ease-out;',
                                            "&:hover": {
                                                fontWeight: '900',
                                                backgroundColor: 'white'
                                            },
                                        }}>
                                        {entry.name}
                                    </TableCell>
                                    {/* 핸드폰 번호 */}
                                    <TableCell align="center" sx={{ 
                                            backgroundColor: "#EFEFEF",
                                            transition: 'all 0.1s ease-out;',
                                            "&:hover": {
                                                fontWeight: '900',
                                                backgroundColor: 'white'
                                            },
                                        }}>
                                        {entry.phoneNumber}
                                    </TableCell>
                                    {/* 주소 */}
                                    <TableCell align="center" sx={{ 
                                            backgroundColor: "#EFEFEF",
                                            transition: 'all 0.1s ease-out;',
                                            "&:hover": {
                                                fontWeight: '900',
                                                backgroundColor: 'white'
                                            },
                                        }}>
                                        {entry.address}
                                    </TableCell>
                                    {/* 광고 경험 */}
                                    <TableCell align="center" sx={{ 
                                            backgroundColor: "#EFEFEF",
                                            transition: 'all 0.1s ease-out;',
                                            "&:hover": {
                                                fontWeight: '900',
                                                backgroundColor: 'white'
                                            },
                                        }}>
                                        {entry.adExperience === "yes"
                                            ? "예"
                                            : entry.adExperience === "no"
                                            ? "아니오"
                                            : "잘 모르겠음"}
                                    </TableCell>
                                    {/* 광고 매체 */}
                                    <TableCell
                                        align="center"
                                        sx={{
                                            backgroundColor: "#EFEFEF",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            maxWidth: "150px",
                                            transition: 'all 0.1s ease-out;',
                                            "&:hover": {
                                                fontWeight: '900',
                                                backgroundColor: 'white'
                                            },
                                        }}
                                    >
                                        {Object.entries(entry.mediaChannels)
                                            .filter(([key, value]) => value)
                                            .map(([key]) => ({
                                                naver: "네이버",
                                                google: "구글",
                                                meta: "메타",
                                                banner: "네트워크 배너",
                                                app: "앱 광고",
                                                none: "잘 모르겠거나 없음",
                                            }[key]))
                                            .join(", ")}
                                    </TableCell>
                                    {/* 상세 문의 */}
                                    <TableCell
                                        align="center"
                                        sx={{
                                            backgroundColor: "#EFEFEF",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            maxWidth: "150px",
                                            transition: 'all 0.1s ease-out;',
                                            "&:hover": {
                                                fontWeight: '900',
                                                backgroundColor: 'white'
                                            },
                                        }}
                                    >
                                        {entry.details.length > 20 ? (
                                            <>
                                                {entry.details.substring(0, 10)}...
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    sx={{
                                                        padding: 0,
                                                        marginLeft: '1rem',
                                                        fontSize: "0.8rem",
                                                    }}
                                                    onClick={() => handleMoreClick(entry.details)}
                                                >
                                                    더보기
                                                </Button>
                                            </>
                                        ) : (
                                            entry.details
                                        )}
                                    </TableCell>
                                    {/* 삭제 버튼 */}
                                    <TableCell align="center" sx={{ backgroundColor: "#EFEFEF" }}>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDelete(entry.id)}
                                        >
                                            삭제
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            {/* Modal for 상세 문의 */}
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "60%",
                        bgcolor: "background.paper",
                        borderRadius: "8px",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2" sx={{ marginBottom: 2 }}>
                        상세 내용
                    </Typography>
                    <Typography id="modal-description">{selectedDetail}</Typography>
                    <Box sx={{ display: "flex", justifyContent: "end", marginTop: 3 }}>
                        <Button variant="contained" onClick={handleModalClose}>
                            닫기
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default InqueryList;
