import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { AddRatingDto } from './dto/addRating.dto';
import { AddFeedbackDto } from './dto/addFeedback.dto';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get()
    async getAll(){
        return await this.eventsService.getAllEvents();
    }

    @Get('filter/location')
    async getFilterLocation(@Query('location') location: string){
        return await this.eventsService.getEventsAtLocation(location);
    }

    @Get('filter/prize/greater')
    async getGreaterPrize(@Query('prize') prize: string){
        return await this.eventsService.getEventsWithLargerPrize(parseInt(prize));
    }

    @Get('filter/prize/lesser')
    async getLesserPrize(@Query('prize') prize: string){
        return await this.eventsService.getEventsWithSmallerPrize(parseInt(prize));
    }

    @Post('rating')
    async addRating(@Body() addRatingDto: AddRatingDto){
        return await this.eventsService.addRating(addRatingDto);
    }

    @Post('feedback')
    async addFeedback(@Body() addFeedbackDto: AddFeedbackDto){
        return await this.eventsService.addFeedback(addFeedbackDto);
    }
}
