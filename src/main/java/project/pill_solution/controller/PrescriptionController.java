package project.pill_solution.controller;

import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import project.pill_solution.service.AwsS3Uploader;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/pill_solution")
public class PrescriptionController {

    private final AwsS3Uploader awsS3Uploader;

    @PostMapping("/drug")
    public String upload(@RequestPart(value = "image")MultipartFile image) throws IOException {

        String fileName = awsS3Uploader.upload(image);
        return fileName;
    }
}
