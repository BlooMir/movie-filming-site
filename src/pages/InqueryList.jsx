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
} from "@mui/material";

const InqueryList = () => {
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        // localStorage에서 데이터 가져오기
        const storedData = JSON.parse(localStorage.getItem("formData"));
        setFormData(storedData);
    }, []);

    if (!formData) {
        return (
            <Box sx={{ textAlign: "center", padding: "2rem" }}>
                <Typography variant="h6">저장된 문의 내역이 없습니다.</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ padding: "4rem", display:'flex', justifyContent:'center' }}>
            <Box sx={{width: '60vw'}}>
                <Typography
                    variant="h4"
                    fontWeight={900}
                    marginBottom="2rem"
                    marginTop='2rem'
                    fontFamily="Noto Sans KR"
                >
                    문의 내역
                </Typography>

                <TableContainer component={Paper} elevation={3}>
                    <Table>
                        <TableHead
                            sx={{
                                backgroundColor: "#333", // 헤더 배경색 어두운 회색
                            }}
                        >
                            <TableRow>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1.5rem",
                                        color: "#FFFFFF", // 텍스트 색상: 화이트
                                    }}
                                >
                                    항목
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1.5rem",
                                        color: "#FFFFFF", // 텍스트 색상: 화이트
                                    }}
                                >
                                    내용
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* 이름 */}
                            <TableRow>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe", // 셀 배경색: 연한 회색
                                    }}
                                >
                                    이름
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe", // 셀 배경색: 연한 회색
                                    }}
                                >
                                    {formData.name}
                                </TableCell>
                            </TableRow>
                            {/* 핸드폰 번호 */}
                            <TableRow>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe",
                                    }}
                                >
                                    핸드폰 번호
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe",
                                    }}
                                >
                                    {formData.phoneNumber}
                                </TableCell>
                            </TableRow>
                            {/* 주소 */}
                            <TableRow>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe",
                                    }}
                                >
                                    주소
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe",
                                    }}
                                >
                                    {formData.address}
                                </TableCell>
                            </TableRow>
                            {/* 광고 경험 */}
                            <TableRow>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe",
                                    }}
                                >
                                    광고 경험
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe",
                                    }}
                                >
                                    {formData.adExperience === "yes"
                                        ? "예"
                                        : formData.adExperience === "no"
                                        ? "아니오"
                                        : "잘 모르겠음"}
                                </TableCell>
                            </TableRow>
                            {/* 광고 매체 */}
                            <TableRow>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe",
                                    }}
                                >
                                    광고 매체
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe",
                                    }}
                                >
                                    {Object.entries(formData.mediaChannels)
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
                            </TableRow>
                            {/* 기타 문의 */}
                            <TableRow>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe",
                                    }}
                                >
                                    기타 문의
                                </TableCell>
                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 400,
                                        fontFamily: "Noto Sans KR",
                                        fontSize: "1rem",
                                        backgroundColor: "#fefefe",
                                    }}
                                >
                                    {formData.details}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default InqueryList;
