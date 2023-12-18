<?php

namespace App\Service;


class ImagesProcess
{
    //* COVERS

    public function processCoverThumb(array &$covers)
    {
        //* COVER AU FORMAT 90 x 90	Thumb, Center gravity ][FORMAT PAR DEFAULT]
        foreach ($covers as &$cover) {
            if (isset($cover['cover'])) {
                $cover['cover']['url'] = str_replace('t_thumb', 't_thumb', $cover['cover']['url']);
            }
        }
    }

    public function processCoverMicro(array &$covers)
    {
        //* COVER AU FORMAT 35 x 35	Thumb, Center gravity
        foreach ($covers as &$cover) {
            if (isset($cover['cover'])) {
                $cover['cover']['url'] = str_replace('t_thumb', 't_micro', $cover['cover']['url']);
            }
        }
    }

    // RECUPREARATION SMALL RETINA
    public function processCoverSmall(array &$covers)
    {
        //* COVER AU FORMAT 90 x 128	Fit
        foreach ($covers as &$cover) {
            if (isset($cover['cover'])) {
                if (strpos($cover['cover']['url'], 't_cover_small_2x') !== false) {
                    $cover['cover']['url'] = str_replace('t_thumb', 't_cover_small_2x', $cover['cover']['url']);
                } else {
                    $cover['cover']['url'] = str_replace('t_thumb', 't_cover_big', $cover['cover']['url']);
                }
            }
        }
    }

    public function processCoverBig(array &$covers)
    {
        //* COVER AU FORMAT 264 x 374 Fit
        foreach ($covers as &$cover) {
            if (isset($cover['cover'])) {
                $cover['cover']['url'] = str_replace('t_thumb', 't_cover_big', $cover['cover']['url']);
            }
        }
    }

    public function processCover720p(array &$covers)
    {
        //* COVER AU FORMAT 1280 x 720	Fit, Center gravity
        foreach ($covers as &$cover) {
            if (isset($cover['cover'])) {
                $cover['cover']['url'] = str_replace('t_thumb', 't_720p', $cover['cover']['url']);
            }
        }
    }

    public function processCover1080p(array &$covers)
    {
        //* COVER AU FORMAT 1920 x 1080	Fit, Center gravity
        foreach ($covers as &$cover) {
            if (isset($cover['cover'])) {
                $cover['cover']['url'] = str_replace('t_thumb', 't_1080p', $cover['cover']['url']);
            }
        }
    }

    //* GAME DETAILS

    //* COVER
    public function processCoverDetail(array &$cover)
    {
        //* COVER AU FORMAT 1280 x 720	Fit, Center gravity FOR GAME DETAILS
            if (isset($cover['cover'])) {
                $cover['cover']['url'] = str_replace('t_thumb', 't_720p', $cover['cover']['url']);
            }
    }

    //* SCREENSHOTS
    public function processScreenshotSmall(array &$screenshots)
    {
        //* SCREENSHOT AU FORMAT 569 x 320	Lfill, Center gravity
        if (isset($screenshots['screenshots'])) {
            foreach ($screenshots['screenshots'] as &$screenshot) {
                $screenshot['url'] = str_replace('t_thumb', 't_screenshot_med', $screenshot['url']);
            }
        }
    }
    public function processScreenshotMedium(array &$screenshots)
    {
        //* SCREENSHOT AU FORMAT 889 x 500	Lfill, Center gravity
        if (isset($screenshots['screenshots'])) {
            foreach ($screenshots['screenshots'] as &$screenshot) {
                $screenshot['url'] = str_replace('t_thumb', 't_screenshot_big', $screenshot['url']);
            }
        }
    }
    public function processScreenshotBig(array &$screenshots)
    {
        //* SCREENSHOT AU FORMAT 1280 x 720	Lfill, Center gravity
        if (isset($screenshots['screenshots'])) {
            foreach ($screenshots['screenshots'] as &$screenshot) {
                $screenshot['url'] = str_replace('t_thumb', 't_screenshot_huge', $screenshot['url']);
            }
        }
    }

    //* DLCS ET EXTANTIONS COVER
    public function processDlcsExpansionsMicro(array &$covers, $type)
    {
        //* COVER AU FORMAT 35 x 35	Thumb, Center gravity
        if (isset($covers[$type])) {
            foreach ($covers[$type] as &$dlc) {
                if (isset($dlc['cover'])) {
                    $dlc['cover']['url'] = str_replace('t_thumb', 't_micro', $dlc['cover']['url']);
                }
            }
        }
    }

    public function processDlcsExpansionsSmall(array &$covers, $type)
    {
        //* COVER AU FORMAT 90 x 128	Fit
        if (isset($covers[$type])) {
            foreach ($covers[$type] as &$dlc) {
                if (isset($dlc['cover'])) {
                    $dlc['cover']['url'] = str_replace('t_thumb', 't_cover_small', $dlc['cover']['url']);
                }
            }
        }
    }

    public function processDlcsExpansionsBig(array &$covers, $type)
    {
        //* COVER AU FORMAT 264 x 374 Fit
        if (isset($covers[$type])) {
            foreach ($covers[$type] as &$dlc) {
                if (isset($dlc['cover'])) {
                    $dlc['cover']['url'] = str_replace('t_thumb', 't_cover_big', $dlc['cover']['url']);
                }
            }
        }
    }

    public function processDlcsExpansions720p(array &$covers, $type)
    {
        //* COVER AU FORMAT 1280 x 720	Fit, Center gravity
        if (isset($covers[$type])) {
            foreach ($covers[$type] as &$dlc) {
                if (isset($dlc['cover'])) {
                    $dlc['cover']['url'] = str_replace('t_thumb', 't_720p', $dlc['cover']['url']);
                }
            }
        }
    }
    

    public function processDlcsExpansions1080p(array &$covers, $type)
    {
        //* COVER AU FORMAT 1920 x 1080	Fit, Center gravity
        if (isset($covers[$type])) {
            foreach ($covers[$type] as &$dlc) {
                if (isset($dlc['cover'])) {
                    $dlc['cover']['url'] = str_replace('t_thumb', 't_1080p', $dlc['cover']['url']);
                }
            }
        }
    }

    //* COVER ARTWORKS

    public function processArtworksBig(array &$covers)
    {
        //* COVER AU FORMAT 264 x 374 Fit
        if (isset($covers['artworks'])) {
            foreach ($covers['artworks'] as &$artwork) {
                $artwork['url'] = str_replace('t_thumb', 't_screenshot_big', $artwork['url']);
            }
        }
    }
}