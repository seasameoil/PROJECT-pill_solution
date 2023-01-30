package project.pill_solution.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.pill_solution.dto.SymptomResponseDto;
import project.pill_solution.service.MainPageService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class MainPageController {

    private final MainPageService mainPageService;

    @GetMapping("")
    public List<SymptomResponseDto> list() {

        return mainPageService.symptomList();
    }
}
