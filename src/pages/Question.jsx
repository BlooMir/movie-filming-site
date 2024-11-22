import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        adExperience: "",
        mediaChannels: {
            naver: false,
            google: false,
            meta: false,
            banner: false,
            app: false,
            none: false,
        },
        details: "",
    });

    const navigate = useNavigate();

    const isValid = Object.values(formData.mediaChannels).some((value) => value);

    // 폼 값 업데이트 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            mediaChannels: {
                ...prev.mediaChannels,
                [name]: checked,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValid) {
            alert("최소 하나의 매체를 선택해야 합니다.");
            return
        }

        // localStorage에 폼 데이터 저장
        localStorage.setItem("formData", JSON.stringify(formData));
        alert("문의 신청이 완료되었습니다.");
        // /inquerylist로 이동
        navigate("/inquirylist");
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
                backgroundColor: "#fefefe",
            }}
        >
            {/* 문의 남기기 텍스트 */}
            <Typography
                marginBottom={"1rem"}
                variant="h3"
                fontWeight={900}
                fontFamily={"Noto Sans KR"}
            >
                문의 남기기
            </Typography>

            <Typography
                marginBottom={"5rem"}
                variant="h6"
                fontWeight={300}
                fontFamily={"Noto Sans KR"}
                color="#3f3f3f"
            >
                퀄리티 있는 상담을 위해서 하단의 내용을 빠짐없이 작성 해주시기 바랍니다.
            </Typography>

            <Box
                sx={{
                    width: "60vw",
                    border: "1px solid",
                    padding: "3rem",
                    borderRadius: "4px",
                    borderColor: "#afafaf",
                }}
            >
                <Typography
                    marginBottom={"2rem"}
                    variant="h5"
                    fontWeight={300}
                    fontFamily={"Noto Sans KR"}
                    color="#3f3f3f"
                >
                    상세 문의 내역
                </Typography>

                <form
                    onSubmit={handleSubmit}
                    id="detail"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        gap: "2rem",
                    }}
                >
                    {/* 이름, 주소, 핸드폰 번호 */}
                    <FormControl
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                            width: "100%",
                        }}
                    >
                        <TextField
                            label="이름"
                            name="name"
                            variant="outlined"
                            fullWidth
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            id="form-name"
                        />
                        <TextField
                            label="핸드폰 번호"
                            placeholder="ex) 010-1234-1234"
                            name="phoneNumber"
                            variant="outlined"
                            fullWidth
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                            id="form-phone"
                        />
                    </FormControl>

                    {/* 주소 */}
                    <TextField
                        label="주소"
                        placeholder="ex) 서울특별시 금천구 가산디지털2로 144, 현대테라타워 11층"
                        name="address"
                        variant="outlined"
                        fullWidth
                        value={formData.address}
                        onChange={handleInputChange}
                        multiline
                        id="form-address"
                    />

                    {/* 라디오 버튼 그룹 */}
                    <FormControl id="form-adExperience">
                        <Typography variant="subtitle1" fontFamily={"Noto Sans KR"}>
                            귀하는 광고를 집행한 적이 있으십니까?
                        </Typography>
                        <RadioGroup
                            name="adExperience"
                            value={formData.adExperience}
                            onChange={handleInputChange}
                            row
                        >
                            <FormControlLabel
                                value="yes"
                                control={<Radio required />}
                                label="예"
                            />
                            <FormControlLabel
                                value="no"
                                control={<Radio required />}
                                label="아니오"
                            />
                            <FormControlLabel
                                value="unsure"
                                control={<Radio required />}
                                label="잘 모르겠음"
                            />
                        </RadioGroup>
                    </FormControl>

                    {/* 체크박스 그룹 */}
                    <FormControl id="form-mediaChannels">
                        <Typography variant="subtitle1" fontFamily={"Noto Sans KR"}>
                            광고를 집행해본 매체를 전부 선택해주세요
                        </Typography>
                        <FormGroup
                            row
                            sx={{ gap: "1rem" }}
                        >
                            {["naver", "google", "meta", "banner", "app", "none"].map((channel) => (
                                <FormControlLabel
                                    key={channel}
                                    control={
                                        <Checkbox
                                            name={channel}
                                            checked={formData.mediaChannels[channel]}
                                            onChange={handleCheckboxChange}
                                        />
                                    }
                                    label={
                                        {
                                            naver: "네이버",
                                            google: "구글",
                                            meta: "메타",
                                            banner: "네트워크 배너",
                                            app: "앱 광고",
                                            none: "잘 모르겠거나 없음",
                                        }[channel]
                                    }
                                />
                            ))}
                        </FormGroup>
                    </FormControl>

                    {/* 기타 상세 문의 */}
                    <TextField
                        label="기타 상세 문의"
                        name="details"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        value={formData.details}
                        onChange={handleInputChange}
                        id="form-details"
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            width: "100%",
                        }}
                    >
                        {/* 제출 버튼 */}
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            color="primary"
                            sx={{ width: '10rem' }}
                            id="form-submit"
                        >
                            문의 전송
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Question;
