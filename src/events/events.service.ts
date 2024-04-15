import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AddRatingDto } from './dto/addRating.dto';
import { AddFeedbackDto } from './dto/addFeedback.dto';

@Injectable()
export class EventsService {
    constructor(private readonly prisma: PrismaService){}

    async getAllEvents(){
        return await this.prisma.event.findMany();
    }

    async getEventsAtLocation(location: string){
        return await this.prisma.event.findMany({where: {location}})
    }

    async getEventsWithLargerPrize(base_prize: number){
        return await this.prisma.event.findMany({where: {
            prize: {
                gte: base_prize,
            }
        }})
    }

    async getEventsWithSmallerPrize(base_prize: number){
        return await this.prisma.event.findMany({where: {
            prize: {
                lte: base_prize,
            }
        }})
    }

    async addRating(addRatingDto: AddRatingDto){
        const {id, rating} = addRatingDto;
        await this.prisma.event.update({
            where: {
                id
            },
            data: {
                rating
            }
        })
    }

    async addFeedback(addFeedbackDto: AddFeedbackDto){
        const {id, feedback} = addFeedbackDto;
        await this.prisma.event.update({
            where: {
                id
            },
            data: {
                feedback
            }
        })
    }
}
